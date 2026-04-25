<template>
  <nav class="flex justify-between items-center p-4 border-b">
    <h1 class="font-bold text-xl">BuildMyPC</h1>

    <div class="flex gap-4 items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/login">Login</router-link>

      <button @click="theme.toggle()">
        {{ theme.dark ? '☀ Light' : '🌙 Dark' }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useThemeStore } from '../store/theme'
const theme = useThemeStore()
</script>
