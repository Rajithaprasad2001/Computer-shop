<script setup lang="ts">
defineProps<{
  categories: string[]
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <select
    :value="modelValue"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    class="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 outline-none focus:border-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
  >
    <option
      v-for="category in categories"
      :key="category"
      :value="category"
      class="text-black"
    >
      {{ category }}
    </option>
  </select>
</template>