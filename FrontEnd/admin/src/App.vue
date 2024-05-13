<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive } from 'vue'

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px 20px;
}
.header {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(66, 40, 40, 0.369); 
  align-items: center;
}

.main-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: stretch;
}

.navigation {
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 20px;
  border-right:  1px solid rgba(66, 40, 40, 0.369);
  height: auto;
}

.navigation a {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1867c0;
}

.contain {
  flex: 1;
}
</style>
