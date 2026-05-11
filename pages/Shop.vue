<script setup lang="ts">
import { onMounted } from 'vue'
import { useFetchProducts } from '../composables/useFetchProducts'
import ProductCard from '../components/ProductCard.vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import LoadingState from '../components/LoadingState.vue'
import EmptyState from '../components/EmptyState.vue'

const {
  loading,
  error,
  search,
  category,
  categories,
  filteredProducts,
  fetchProducts
} = useFetchProducts()

onMounted(fetchProducts)
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-12">
    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="text-3xl font-bold">Featured Products</h2>
        <p class="text-slate-500 dark:text-slate-400">
          Search and filter computer parts
        </p>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row">
        <SearchBar v-model="search" />
        <CategoryFilter v-model="category" :categories="categories" />
      </div>
    </div>

    <p v-if="error" class="rounded-2xl bg-red-100 p-4 text-red-700">
      {{ error }}
    </p>

    <LoadingState v-if="loading" />

    <EmptyState v-else-if="filteredProducts.length === 0" />

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>