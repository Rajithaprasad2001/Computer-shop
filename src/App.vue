<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Product, ProductResponse } from './types/Product';
import NavBar from './components/NavBar.vue';

// Reactive state for our computer list
const computers = ref<Product[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    // Fetching from the laptops category
    const response = await fetch('https://dummyjson.com/products/category/laptops');
    const data: ProductResponse = await response.json();
    computers.value = data.products;
  } catch (error) {
    console.error("Failed to load computers:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar />
    
    <main class="p-6">
      <h2 class="text-2xl font-bold mb-4">Available Laptops</h2>
      
      <div v-if="isLoading">Loading high-performance gear...</div>
      <ul v-else class="space-y-2">
        <li v-for="pc in computers" :key="pc.id" class="bg-white p-3 rounded shadow">
          {{ pc.title }} - ${{ pc.price }}
        </li>
      </ul>
    </main>
  </div>
</template>