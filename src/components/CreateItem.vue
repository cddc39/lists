<template>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="prompt = true" fab icon="add" color="secondary" />
    </q-page-sticky>
    <q-dialog v-model="prompt">
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">New item name:</div>
                <p>{{ listName }}</p>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input
                    dense
                    v-model="itemName"
                    autofocus
                    @keyup.enter="itemCreate(listName, itemName)"
                />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" @click="itemName = ''" v-close-popup />
                <q-btn
                    color="positive"
                    label="Create item"
                    @click="itemCreate(listName, itemName)"
                    v-close-popup
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { useItemsStore } from "@/stores/items"
import { ref } from 'vue'
defineProps({
    listName: String
})
const items = useItemsStore()
let prompt = ref(false)
let itemName = ""
const itemCreate = (listName, itemName) => {
    items.itemCreate({ listName: listName, name: itemName })
    itemName = ''
    prompt = false
}
</script>
