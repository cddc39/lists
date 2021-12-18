<!-- <template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template> -->

<template>
    <q-layout view="hHh lpR fFf">
        <q-header class="text-black" elevated>
            <q-toolbar>
                <q-btn flat round dense icon="list" class="q-mr-sm" />
                <q-toolbar-title shrink>lists</q-toolbar-title>
                <q-space />
                <q-btn flat round dense icon="settings"></q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <q-page>
                <Lists />
                <CreateList />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import Lists from './Lists.vue'
import CreateList from './CreateList.vue'

</script>
