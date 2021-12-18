<template>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="prompt = true" fab icon="add" color="secondary" />
    </q-page-sticky>
    <q-dialog v-model="prompt">
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">New item name:</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input
                    dense
                    v-model="name"
                    autofocus
                    @keyup.enter="items.createItem({ name: name }); name = ''; prompt = false"
                />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" @click="name = ''" v-close-popup />
                <q-btn
                    color="positive"
                    label="Create item"
                    @click="items.createItem({ name: name }); name = ''"
                    v-close-popup
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { useItemsStore } from "@/stores/items"
import { ref } from 'vue'
const items = useItemsStore()

let prompt = ref(false)
let name = ""
</script>
