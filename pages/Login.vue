<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
  username: 'emilys',
  password: 'emilyspass'
})

const handleLogin = async () => {
  await authStore.login(form.username, form.password)

  if (authStore.isLoggedIn) {
    router.push('/')
  }
}
</script>

<template>
  <section class="mx-auto max-w-md px-5 py-16">
    <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-white/5">
      <h2 class="text-3xl font-bold">Login</h2>
      <p class="mt-2 text-slate-500 dark:text-slate-400">
        Demo login using DummyJSON auth.
      </p>

      <form @submit.prevent="handleLogin" class="mt-6 space-y-4">
        <div>
          <label class="mb-2 block text-sm font-semibold">Username</label>
          <input
            v-model="form.username"
            class="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 dark:border-white/10 dark:bg-white/5"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-semibold">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 dark:border-white/10 dark:bg-white/5"
          />
        </div>

        <p v-if="authStore.error" class="rounded-2xl bg-red-100 p-3 text-red-600">
          {{ authStore.error }}
        </p>

        <button
          class="w-full rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white"
        >
          {{ authStore.loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
    </div>
  </section>
</template>