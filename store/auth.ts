import { defineStore } from 'pinia'
import type { User } from '../types/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
    loading: false,
    error: ''
  }),

  getters: {
    isLoggedIn: (state) => state.user !== null
  },

  actions: {
    async login(username: string, password: string) {
      this.loading = true
      this.error = ''

      try {
        const res = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password,
            expiresInMins: 30
          })
        })

        if (!res.ok) {
          throw new Error('Invalid username or password')
        }

        const data: User = await res.json()
        this.user = data
        localStorage.setItem('user', JSON.stringify(data))
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Login failed'
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
    }
  }
})