<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center">
    <div>
      <p class="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-700 dark:text-blue-300">
        Build your dream setup
      </p>

      <h2 class="text-4xl font-black leading-tight md:text-6xl">
        Buy & Sell Quality Computer Parts
      </h2>

      <p class="mt-5 max-w-xl text-slate-600 dark:text-slate-300">
        Find GPUs, CPUs, motherboards, storage, and gaming accessories in one modern Vue SPA.
      </p>

      <div class="mt-8 flex gap-3">
        <RouterLink
          to="/shop"
          class="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Shop Now
        </RouterLink>

        <RouterLink
          to="/login"
          class="rounded-2xl border border-slate-200 px-6 py-3 font-semibold dark:border-white/10"
        >
          Login
        </RouterLink>
      </div>
    </div>

    <div class="rounded-[2rem] border border-slate-200 bg-slate-100 p-5 shadow-2xl dark:border-white/10 dark:bg-white/5">
      <img
        class="h-80 w-full rounded-[1.5rem] object-cover"
        src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1200&q=80"
        alt="Gaming PC setup"
      />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-5 pb-16">
    <div class="rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 text-center shadow-lg dark:border-white/10">
      <h3 class="text-3xl font-bold">🚀 Why Choose PC Hub?</h3>
      <p class="mt-3 text-slate-600 dark:text-slate-300">
        Modern, fast and responsive single page application built with Vue 3.
      </p>

      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-2xl bg-white/70 p-5 shadow dark:bg-white/5">
          <h4 class="text-lg font-bold">⚡ Fast UI</h4>
          <p class="text-sm text-slate-500">Instant updates without reload</p>
        </div>

        <div class="rounded-2xl bg-white/70 p-5 shadow dark:bg-white/5">
          <h4 class="text-lg font-bold">🔍 Smart Search</h4>
          <p class="text-sm text-slate-500">Find products quickly</p>
        </div>

        <div class="rounded-2xl bg-white/70 p-5 shadow dark:bg-white/5">
          <h4 class="text-lg font-bold">🛒 Cart System</h4>
          <p class="text-sm text-slate-500">Add and manage items</p>
        </div>

        <div class="rounded-2xl bg-white/70 p-5 shadow dark:bg-white/5">
          <h4 class="text-lg font-bold">🌙 Dark Mode</h4>
          <p class="text-sm text-slate-500">Switch theme anytime</p>
        </div>
      </div>
    </div>
  </section>
</template>