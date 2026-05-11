<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Product } from '../types/product'
import { useCartStore } from '../store/cart'

defineProps<{
  product: Product
}>()

const cartStore = useCartStore()
</script>

<template>
  <article class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="h-52 w-full object-cover"
    />

    <div class="p-5">
      <div class="mb-3 flex items-center justify-between">
        <span class="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-700 dark:text-blue-300">
          {{ product.category }}
        </span>
        <span class="text-sm text-yellow-500">★ {{ product.rating }}</span>
      </div>

      <h3 class="text-lg font-bold">{{ product.title }}</h3>
      <p class="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
        {{ product.description }}
      </p>

      <div class="mt-5 flex items-center justify-between">
        <p class="text-2xl font-black">USD {{ product.price }}</p>

        <div class="flex gap-2">
          <RouterLink
            :to="`/product/${product.id}`"
            class="rounded-xl border border-slate-200 px-3 py-2 text-sm dark:border-white/10"
          >
            View
          </RouterLink>

          <button
            @click="cartStore.addToCart(product)"
            class="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </article>
</template>