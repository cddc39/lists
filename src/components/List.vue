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
                <q-btn icon="more_vert" round flat @click.stop>
                    <q-menu auto-close>
                        <q-list>
                            <ItemEdit :item="item" />
                            <q-item clickable @click.stop="itemsStore.itemDelete(item)">
                                <q-btn icon="delete" round flat></q-btn>
                                <q-item-section>delete</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
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
                <q-btn icon="delete" round flat @click.stop="itemsStore.itemDelete(item)"></q-btn>
                <q-btn icon="more_vert" round flat @click.stop="menu()"></q-btn>
            </q-item>
        </q-list>
    </div>
    <ItemCreate :listName="listName" />
</template>

<script setup>
import ItemCreate from './ItemCreate.vue'
import ItemEdit from './ItemEdit.vue'
import { useItemsStore } from "@/stores/items"
import { computed } from 'vue'

const props = defineProps({
    listName: String
})

const itemsStore = useItemsStore();
const itemsActive = computed(() => itemsStore.getActiveItemsByList(props.listName))
const itemsInactive = computed(() => itemsStore.getInactiveItemsByList(props.listName))

const edit = () => { console.log("test") }
</script>
