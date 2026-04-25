import { defineStore } from 'pinia'
import type { Product } from '../types/product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart') || '[]') as Product[]
  }),

  actions: {
    add(product: Product) {
      this.items.push(product)
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    remove(id: number) {
      this.items = this.items.filter(item => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(this.items))
    }
  }
})