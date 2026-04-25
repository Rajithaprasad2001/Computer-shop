<template>
  <div class="border rounded-xl p-4 shadow hover:shadow-lg transition">
    <img :src="product.thumbnail" class="w-full h-44 object-cover rounded-lg" />

    <h2 class="font-bold mt-3">{{ product.title }}</h2>
    <p class="text-sm text-gray-500">{{ product.category }}</p>
    <p class="font-semibold mt-2">${{ product.price }}</p>

    <div class="flex gap-2 mt-4">
      <button @click="view" class="bg-blue-500 text-white px-4 py-2 rounded">
        View
      </button>

      <button @click="cart.add(product)" class="bg-green-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'
import type { Product } from '../types/product'

const props = defineProps<{ product: Product }>()
const router = useRouter()
const cart = useCartStore()

const view = () => {
  router.push(`/product/${props.product.id}`)
}
</script>
