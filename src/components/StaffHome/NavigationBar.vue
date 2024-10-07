<script setup>
import { ref } from "vue";


    const items = ref([
    {
        label: 'home',
        icon: 'pi pi-th-large',
        route: '/adminhome'
    },
    {
        label: 'Wallets',
        icon: 'pi pi-wallet',
        route: '/createwallet'
    },
    {
        label: 'Order',
        icon: 'pi pi-shopping-cart',
        route: '/order'
    },
    {
        label: 'Users',
        icon: 'pi pi-users',
        route: '/listofusers'
    },
    {
        label: 'Tickets',
        icon: 'pi pi-tag',
        route: '/ticket'
    },
    {
        label: 'Notification',
        icon: 'pi pi-bell',
        route: '/notification'
    },
    {
        label: 'Audit Rail',
        icon: 'pi pi-megaphone',
        route: '/audit'
    }
    
 
]);
</script>
<template>
    <Menubar :model="items" :pt="{ root: {} }">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" class="ml-2 mr-2" />
                    <span class="ml-2 mr-2">{{ item.label }}</span>
                </a>
            </router-link>
        </template>
    </Menubar>
</template>