<template>
    <div class="q-pa-md">
        <h3>lists</h3>
        <q-list separator>
            <q-item v-for="list in lists" clickable v-ripple :key="list">
                <q-item-section>{{ list }}</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script setup>
import { useListsStore } from "@/stores/lists"
const lists = useListsStore().lists
</script>
