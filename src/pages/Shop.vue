<template>
  <div class="p-6">
    <input
      v-model="search"
      placeholder="Search products"
      class="border p-3 rounded w-full"
    />

    <div class="grid md:grid-cols-3 gap-6 mt-6">
      <ProductCard
        v-for="product in filtered"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'
import type { Product } from '../types/product'

const products = ref<Product[]>([])
const search = ref('')

onMounted(async () => {
  const res = await axios.get('https://dummyjson.com/products')
  products.value = res.data.products
})

const filtered = computed(() =>
  products.value.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>