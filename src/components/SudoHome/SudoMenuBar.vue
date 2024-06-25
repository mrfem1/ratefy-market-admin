<script setup>
    import { ref } from "vue";
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const items = ref([
    {
        label: 'home',
        icon: 'pi pi-th-large',
        route: '/sudo-home'
    },
    {
        label: 'Wallets',
        icon: 'pi pi-database',
        route: '/sudo-wallet'
    },
    {
        label: 'Staff',
        icon: 'pi pi-comments',
        route: '/sudo-staff'
    },
    {
        label: 'Task',
        icon: 'pi pi-check-square',
        route: '/sudo-task'
    },
    {
        label: 'Action',
        icon: 'pi pi-key',
        route: '/sudo-action'
    },
    {
        label: 'Employ',
        icon: 'pi pi-link',
        route: '/sudo-employ'
    },
]);
</script>
<template>
    <Menubar :model="items" :pt="{ root: { class:  'mx-5 text-xs font-bold' } }">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </router-link>
        </template>
    </Menubar>
</template>
