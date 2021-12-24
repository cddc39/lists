<template>
  <q-dialog v-model="dialogsStore.edit">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Edit item:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          color="dark"
          dense
          label="Item name"
          v-model="newName"
          autofocus
          @keyup.enter="itemEdit(item, newName)"
          v-close-popup
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn
          color="positive"
          label="Edit item"
          @click="itemEdit(item, newName)"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogsStore } from "@/stores/dialogs";

const itemEdit = (item, newName) => {
  item.name = newName;
};

const dialogsStore = useDialogsStore();
const item = dialogsStore.item;
let newName = item.name;
</script>
