<template>
    <q-btn icon="more_vert" round flat @click.stop>
        <q-menu auto-close>
            <q-list>
                <q-item clickable @click="dialog(item, 'edit')">
                    <q-icon class="q-pa-sm" size="sm" name="edit" />
                    <q-item-section>edit</q-item-section>
                </q-item>
                <ItemMenuDelete :item="item" />
            </q-list>
        </q-menu>
    </q-btn>
</template>

<script setup>
import ItemMenuDelete from './ItemMenuDelete.vue'
import { useDialogsStore } from "@/stores/dialogs"

defineProps({
    item: Object
})

const dialogsStore = useDialogsStore();
const dialog = (item, dialog) => {
    dialogsStore.item = item
    dialogsStore[dialog] = true
}
</script>
