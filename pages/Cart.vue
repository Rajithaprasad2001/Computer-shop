<script setup lang="ts">
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
</script>

<template>
  <section class="mx-auto max-w-5xl px-5 py-12">
    <h2 class="mb-8 text-3xl font-bold">Shopping Cart</h2>

    <div v-if="cartStore.items.length === 0" class="rounded-3xl border p-10 text-center">
      <h3 class="text-xl font-bold">Your cart is empty</h3>
      <p class="mt-2 text-slate-500">Add products from shop page.</p>
    </div>

    <div v-else class="space-y-5">
      <div
        v-for="item in cartStore.items"
        :key="item.product.id"
        class="flex flex-col gap-4 rounded-3xl border p-4 md:flex-row md:items-center md:justify-between"
      >
        <div class="flex items-center gap-4">
          <img
            :src="item.product.thumbnail"
            class="h-24 w-24 rounded-2xl object-cover"
          />

          <div>
            <h3 class="font-bold">{{ item.product.title }}</h3>
            <p class="text-slate-500">USD {{ item.product.price }}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button @click="cartStore.decrease(item.product.id)" class="rounded-xl border px-3 py-2">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="cartStore.increase(item.product.id)" class="rounded-xl border px-3 py-2">+</button>

          <button
            @click="cartStore.removeFromCart(item.product.id)"
            class="rounded-xl bg-red-600 px-3 py-2 text-white"
          >
            Remove
          </button>
        </div>
      </div>

      <div class="rounded-3xl bg-slate-100 p-6 dark:bg-white/5">
        <p class="text-xl font-bold">
          Total: USD {{ cartStore.totalPrice.toFixed(2) }}
        </p>

        <button
          @click="cartStore.clearCart"
          class="mt-4 rounded-xl bg-red-600 px-4 py-2 text-white"
        >
          Clear Cart
        </button>
      </div>
    </div>
  </section>
</template>