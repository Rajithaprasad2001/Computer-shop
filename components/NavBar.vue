<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../store/cart'
import { useAuthStore } from '../store/auth'
import { useThemeStore } from '../store/theme'

const cartStore = useCartStore()
const authStore = useAuthStore()
const themeStore = useThemeStore()
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white">
          PC
        </div>
        <div>
          <h1 class="text-xl font-bold">PC Hub</h1>
          <p class="text-xs text-slate-500 dark:text-slate-400">Computer parts store</p>
        </div>
      </RouterLink>

      <div class="hidden gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
        <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
        <RouterLink to="/shop" class="hover:text-blue-600">Shop</RouterLink>
        <RouterLink to="/cart" class="hover:text-blue-600">Cart</RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="themeStore.toggleTheme"
          class="rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-semibold dark:border-white/10 dark:bg-white/5"
        >
          {{ themeStore.isDark ? '☀️ Light' : '🌙 Dark' }}
        </button>

        <RouterLink
          v-if="!authStore.isLoggedIn"
          to="/login"
          class="rounded-xl border border-blue-600 px-3 py-2 text-sm font-semibold text-blue-600"
        >
          Login
        </RouterLink>

        <button
          v-else
          @click="authStore.logout"
          class="rounded-xl border px-3 py-2 text-sm font-semibold"
        >
          Logout
        </button>

        <RouterLink
          to="/cart"
          class="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Cart {{ cartStore.totalItems }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>