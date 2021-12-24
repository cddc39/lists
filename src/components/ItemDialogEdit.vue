<template>
  <q-dialog v-model="dialogsStore.edit">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Edit item:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          v-model="newName"
          v-close-popup
          color="dark"
          dense
          label="Item name"
          autofocus
          @keyup.enter="itemEdit(item, newName)"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancel" />
        <q-btn v-close-popup color="positive" label="Edit item" @click="itemEdit(item, newName)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogsStore } from "@/stores/dialogs"

const itemEdit = (item, newName) => {
  item.name = newName
}

const dialogsStore = useDialogsStore()
const item = dialogsStore.item
let newName = item.name
</script>
