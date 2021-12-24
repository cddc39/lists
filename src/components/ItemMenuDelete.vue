<template>
  <q-item clickable @click.stop="itemsStore.itemDelete(item)">
    <q-icon class="q-pa-sm" size="sm" name="delete" />
    <q-item-section>delete</q-item-section>
  </q-item>
</template>

<script setup>
import { useItemsStore } from "@/stores/items"
import { defineProps } from "vue"

const itemsStore = useItemsStore()
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
