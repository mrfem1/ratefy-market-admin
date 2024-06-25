<script setup>
import { useRouter } from 'vue-router';
import AdminLogin from '../components/Auth/Staff/AdminLogin.vue'
const router = useRouter()


const home = () => {
  router.push('/')
}
</script>

<template>
    <AdminLogin />
    <SpeedDial @click="home" showIcon="pi pi-home" direction="left" :style="{ top: 'calc(100% - 6rem)', right: 0, margin: '.5rem' }"  />
  </template>
  
  <style>

  </style>
  