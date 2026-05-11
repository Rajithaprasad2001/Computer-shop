<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Product } from '../types/product'
import { useCartStore } from '../store/cart'

const route = useRoute()
const cartStore = useCartStore()

const product = ref<Product | null>(null)
const loading = ref(false)
const error = ref('')

onMounted(async () => {
  loading.value = true

  try {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)

    if (!res.ok) {
      throw new Error('Product not found')
    }

    product.value = await res.json()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Something went wrong'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-12">
    <p v-if="loading">Loading product...</p>

    <p v-else-if="error" class="text-red-500">{{ error }}</p>

    <div v-else-if="product" class="grid gap-10 md:grid-cols-2">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-96 w-full rounded-3xl object-cover"
      />

      <div>
        <p class="mb-3 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600">
          {{ product.category }}
        </p>

        <h2 class="text-4xl font-black">{{ product.title }}</h2>

        <p class="mt-4 text-slate-600 dark:text-slate-300">
          {{ product.description }}
        </p>

        <p class="mt-6 text-4xl font-black">USD {{ product.price }}</p>

        <p class="mt-2 text-yellow-500">★ {{ product.rating }}</p>

        <button
          @click="cartStore.addToCart(product)"
          class="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>