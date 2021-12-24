<template>
  <div class="q-pa-md">
    <q-list separator>
      <q-item
        v-for="list in listsStore.lists"
        :key="list"
        v-ripple
        :to="{ params: { listName: list.name }, name: 'List' }"
        clickable
      >
        <q-item-section>{{ list.name }}</q-item-section>
        <q-btn icon="delete" round flat @click.prevent="listsStore.listDelete(list)"></q-btn>
      </q-item>
    </q-list>
  </div>
  <ListCreate />
</template>

<script setup>
import ListCreate from "./ListCreate.vue"
import { useListsStore } from "@/stores/lists"
const listsStore = useListsStore()
</script>
