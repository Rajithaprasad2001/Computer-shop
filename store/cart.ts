import { defineStore } from 'pinia'
import type { Product } from '../types/product'

export interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  },

  actions: {
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    addToCart(product: Product) {
      const found = this.items.find((item) => item.product.id === product.id)

      if (found) {
        found.quantity++
      } else {
        this.items.push({ product, quantity: 1 })
      }

      this.saveCart()
    },

    removeFromCart(id: number) {
      this.items = this.items.filter((item) => item.product.id !== id)
      this.saveCart()
    },

    increase(id: number) {
      const item = this.items.find((item) => item.product.id === id)
      if (item) item.quantity++
      this.saveCart()
    },

    decrease(id: number) {
      const item = this.items.find((item) => item.product.id === id)

      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(id)
      }

      this.saveCart()
    },

    clearCart() {
      this.items = []
      this.saveCart()
    }
  }
})