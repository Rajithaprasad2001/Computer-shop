<script setup lang="ts">
import { useThemeStore } from '../store/theme'

const themeStore = useThemeStore()
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-semibold dark:border-white/10 dark:bg-white/5"
  >
    {{ themeStore.isDark ? '☀️ Light' : '🌙 Dark' }}
  </button>
</template>