<template>
  <q-input v-model="itemsStore.filter" class="q-pb-lg" label="Search" color="dark">
    <template #prepend>
      <q-icon name="search" />
    </template>
    <template #after>
      <q-icon name="add" class="cursor-pointer" @click="itemsStore.filter = ''" />
    </template>
  </q-input>
</template>

<script setup>
import { useItemsStore } from "@/stores/items"
const itemsStore = useItemsStore()
itemsStore.filter = ""
</script>
