<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="add" color="secondary" @click="prompt = true" />
  </q-page-sticky>
  <q-dialog v-model="prompt">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">New item name:</div>
        <p>{{ listName }}</p>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="itemName" dense autofocus @keyup.enter="itemCreate(listName, itemName)" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn v-close-popup flat label="Cancel" @click="itemName = ''" />
        <q-btn v-close-popup color="positive" label="Create item" @click="itemCreate(listName, itemName)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useItemsStore } from "@/stores/items"
import { defineProps, ref } from "vue"
defineProps({
  listName: {
    type: String,
    required: true,
  },
})
const items = useItemsStore()
let prompt = ref(false)
let itemName = ""
const itemCreate = (listName, itemName) => {
  items.itemCreate({ active: true, listName: listName, name: itemName })
  itemName = ""
  prompt = false
}
</script>
