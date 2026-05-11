<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 outline-none focus:border-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
    placeholder="Search products..."
  />
</template>