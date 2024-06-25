<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const items = ref([
  { 
    label: 'Boss',
    route: '/home',
    icon: 'pi pi-shield',
    url: '/home',
  }, 
  { 
    label: 'Staff',
    route: '/staff',
    icon: 'pi pi-users',
    url: '/staff',
   }
])
</script>
<template>

    <Menubar 
    :model="items" 
    :pt="{
        
        content: { class: 'text-sm py-0 px-0' }
    }">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span class="m-0 p-1 text-[8]">{{ item.label }}</span>
                </a>
            </router-link>
        </template>
    </Menubar>
  
</template>
<style scoped>

    
</style>