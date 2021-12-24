<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="add" color="secondary" @click="prompt = true" />
  </q-page-sticky>
  <q-dialog v-model="prompt">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">New list name:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="listName" dense autofocus @keyup.enter="listCreate(listName)" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn v-close-popup flat label="Cancel" @click="listName = ''" />
        <q-btn v-close-popup color="positive" label="Create list" @click="listCreate(listName)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useListsStore } from "@/stores/lists"
import { ref } from "vue"
const lists = useListsStore()
let prompt = ref(false)
let listName = ""
const listCreate = (listName) => {
  lists.listCreate({ name: listName })
  listName = ""
  prompt = false
}
</script>
