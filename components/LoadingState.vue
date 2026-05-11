<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="item in 6"
      :key="item"
      class="h-80 animate-pulse rounded-3xl bg-slate-200 dark:bg-white/10"
    />
  </div>
</template>