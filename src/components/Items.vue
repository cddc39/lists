<template>
    <div class="q-pa-md">
        <h5>{{ listName }}</h5>
        <ItemSearch />

        <q-list separator>
            <q-item
                v-for="item in itemsActive"
                clickable
                v-ripple
                :key="item"
                @click="itemsStore.itemInactivate(item)"
            >
                <q-item-section>{{ item.name }}</q-item-section>
                <ItemMenu :item="item" />
            </q-item>
        </q-list>
        <h6>crossed off:</h6>
        <q-list separator>
            <q-item
                v-for="item in itemsInactive"
                clickable
                v-ripple
                :key="item"
                @click="itemsStore.itemActivate(item)"
            >
                <q-item-section>
                    <s>{{ item.name }}</s>
                </q-item-section>
                <ItemMenu :item="item" />
            </q-item>
        </q-list>
    </div>
    <ItemCreate :listName="listName" />
    <ItemDialogEdit v-if="dialogsStore.edit" />
</template>

<script setup>
import ItemDialogEdit from './ItemDialogEdit.vue'
import ItemCreate from './ItemCreate.vue'
import ItemMenu from './ItemMenu.vue'
import ItemSearch from './ItemSearch.vue'
import { useItemsStore } from "@/stores/items"
import { computed } from 'vue'
import { useDialogsStore } from "@/stores/dialogs"

const props = defineProps({
    listName: String
})

const itemsStore = useItemsStore();
const itemsActive = computed(() => itemsStore.getActiveItemsByList(props.listName))
const itemsInactive = computed(() => itemsStore.getInactiveItemsByList(props.listName))

const dialogsStore = useDialogsStore();
</script>
