<template>
  <div v-if="product" class="p-6">
    <img :src="product.thumbnail" class="rounded-xl" />
    <h1 class="text-3xl font-bold mt-4">{{ product.title }}</h1>
    <p class="mt-2">{{ product.description }}</p>
    <p class="mt-4 font-bold text-xl">${{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import type { Product } from '../types/product'

const route = useRoute()
const product = ref<Product | null>(null)

onMounted(async () => {
  const res = await axios.get(
    `https://dummyjson.com/products/${route.params.id}`
  )
  product.value = res.data
})
</script>