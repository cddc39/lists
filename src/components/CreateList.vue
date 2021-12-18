<template>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="prompt = true" fab icon="add" color="secondary" />
    </q-page-sticky>
    <q-dialog v-model="prompt">
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">New list name:</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input
                    dense
                    v-model="name"
                    autofocus
                    @keyup.enter="lists.createList(name); name = ''; prompt = false"
                />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" @click="name = ''" v-close-popup />
                <q-btn
                    color="positive"
                    label="Create list"
                    @click="lists.createList(name); name = ''"
                    v-close-popup
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { useListsStore } from "@/stores/lists"
import { ref } from 'vue'
const lists = useListsStore()

let prompt = ref(false)
let name = ""
</script>
