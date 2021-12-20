<template>
    <div class="q-pa-md">
        <h5>{{ listName }}</h5>
        <q-list separator>
            <q-item
                v-for="item in itemsActive"
                clickable
                v-ripple
                :key="item"
                @click="itemsStore.itemInactivate(item)"
            >
                <q-item-section>{{ item.name }}</q-item-section>
                <q-btn icon="delete" round flat @click.prevent="itemsStore.itemDelete(item)"></q-btn>
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
                <q-btn icon="delete" round flat @click.prevent="itemsStore.itemDelete(item)"></q-btn>
            </q-item>
        </q-list>
    </div>
    <CreateItem :listName="listName" />
</template>

<script setup>
import CreateItem from '../components/CreateItem.vue'
import { useItemsStore } from "@/stores/items"
import { computed } from 'vue'

const itemsStore = useItemsStore();
const props = defineProps({
    listName: String
})

const itemsActive = computed(() => itemsStore.getActiveItemsByList(props.listName))
const itemsInactive = computed(() => itemsStore.getInactiveItemsByList(props.listName))
</script>
