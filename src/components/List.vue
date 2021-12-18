<template>
    <div class="q-pa-md">
        <q-list separator>
            <q-item v-for="item in itemsStore.items" clickable v-ripple :key="item">
                <q-item-section>{{ item }}</q-item-section>
                <q-btn icon="delete" round flat @click="itemsStore.deleteItem(item)"></q-btn>
            </q-item>
        </q-list>
    </div>
    <CreateItem />
</template>

<script setup>
import CreateItem from '../components/CreateItem.vue'
import { useItemsStore } from "@/stores/items"
const itemsStore = useItemsStore();
</script>
