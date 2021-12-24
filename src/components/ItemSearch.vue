<template>
  <q-input
    class="q-pb-lg"
    v-model="itemsStore.filter"
    label="Search"
    color="dark"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:after>
      <q-icon
        name="add"
        @click="itemsStore.filter = ''"
        class="cursor-pointer"
      />
    </template>
  </q-input>
</template>

<script setup>
import { useItemsStore } from "@/stores/items";
const itemsStore = useItemsStore();
itemsStore.filter = "";
</script>
