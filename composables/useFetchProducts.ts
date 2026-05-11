import { ref, computed } from 'vue'
import type { Product, ProductsResponse } from '../types/product'

export function useFetchProducts() {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref('')
  const search = ref('')
  const category = ref('All')

  const fetchProducts = async () => {
    loading.value = true
    error.value = ''

    try {
      const apiCategories = [
        'laptops',
        'smartphones',
        'tablets',
        'mobile-accessories'
      ]

      const responses = await Promise.all(
        apiCategories.map((apiCategory) =>
          fetch(`https://dummyjson.com/products/category/${apiCategory}`)
        )
      )

      const data: ProductsResponse[] = await Promise.all(
        responses.map((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch products')
          }

          return res.json()
        })
      )

      products.value = data
        .flatMap((item) => item.products)
        .slice(0, 30)
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Something went wrong'
    } finally {
      loading.value = false
    }
  }

  const categories = computed(() => [
    'All',
    ...new Set(products.value.map((product) => product.category))
  ])

  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      const searchText = search.value.toLowerCase()

      const matchSearch =
        product.title.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.brand?.toLowerCase().includes(searchText)

      const matchCategory =
        category.value === 'All' || product.category === category.value

      return matchSearch && matchCategory
    })
  })

  return {
    products,
    loading,
    error,
    search,
    category,
    categories,
    filteredProducts,
    fetchProducts
  }
}