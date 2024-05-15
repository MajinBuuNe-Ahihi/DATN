<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref, computed, watch } from 'vue'
import moment from 'moment'
</script>
<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card class="ma-10">
          <v-card-title class="d-flex align-center justify-center pe-2"> Đăng nhập </v-card-title>
          <v-container>
            <v-row justify="center">
              <v-col cols="3"  sm="6">
                <text-custom label="Tên đăng nhập" outlined required />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="3" sm="6">
                <text-custom label="Mật khẩu" type="password" outlined required />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="2" sm="3">
                <v-btn style="width:100%" color="#673AB7" @click="login">Quên Mật Khẩu</v-btn>
              </v-col>
              <v-col cols="2" sm="3">
                <v-btn style="width:100%" color="#3F51B5" @click="login">Đăng nhập</v-btn>
              </v-col>
              <v-col cols="2" sm="3">
                <router-link to="/register"> <v-btn style="width:100%" color="#2196F3">Đăng kí</v-btn></router-link>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
