<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-black" elevated>
      <q-toolbar>
        <q-btn flat round dense icon="list" class="q-mr-sm" />
        <router-link :to="{ name: 'Lists' }">
          <q-toolbar-title>lists</q-toolbar-title>
        </router-link>
        <q-space />
        <q-btn flat round dense icon="settings"></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
</script>
