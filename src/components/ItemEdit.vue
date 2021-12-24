<template>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="prompt = true" fab icon="add" color="secondary" />
    </q-page-sticky>

    <q-item clickable @click.stop="prompt = true">
        <q-btn icon="edit" round flat></q-btn>
        <q-item-section>edit</q-item-section>
    </q-item>
    <q-dialog v-model="prompt">
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Edit item:</div>
                <p>{{ item.name }}</p>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input
                    dense
                    v-model="newName"
                    autofocus
                    @keyup.enter="itemEdit(item, newName)"
                />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" @click="newName = ''" v-close-popup />
                <q-btn
                    color="positive"
                    label="Edit item"
                    @click="itemEdit(item, newName)"
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
    item: Object
})
let prompt = ref(false)
let newName = ref("")
const itemsStore = useItemsStore();

const itemEdit = (item, newName) => {
    item.name = newName
}
</script>
