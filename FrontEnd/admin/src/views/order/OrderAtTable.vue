<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
const tab = ref(null)

</script>
<template>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Danh sách order</v-tab>
      <v-tab value="two">Thêm order</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <order-list :type="1"/>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <add-order/>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </template>
<style scoped>
</style>
