<template>
    <div class="q-pa-md">
        <q-list separator>
            <q-item
                :to="{ params: { listName: list.name }, name: 'List' }"
                v-for="list in listsStore.lists"
                clickable
                v-ripple
                :key="list"
            >
                <q-item-section>{{ list.name }}</q-item-section>
                <q-btn icon="delete" round flat @click.prevent="listsStore.listDelete(list)"></q-btn>
            </q-item>
        </q-list>
    </div>
    <CreateList />
</template>

<script setup>
import CreateList from '../components/CreateList.vue'
import { useListsStore } from "@/stores/lists"
const listsStore = useListsStore();
</script>
