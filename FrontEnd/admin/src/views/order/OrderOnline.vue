<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
const tab = ref(null)

</script>
<template>
    <order-list :type="0"/>
</template>
<style scoped>
</style>
