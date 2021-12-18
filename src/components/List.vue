<template>
    <div class="q-pa-md">
        <q-list separator>
            <q-item v-for="list in listsStore.lists" clickable v-ripple :key="list">
                <q-item-section>{{ list }}</q-item-section>
                <q-btn icon="delete" round flat @click="listsStore.deleteList(list)"></q-btn>
            </q-item>
        </q-list>
    </div>
</template>

<script setup>
import { useListsStore } from "@/stores/lists"
const listsStore = useListsStore();
</script>
