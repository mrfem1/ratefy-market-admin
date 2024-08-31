<script setup>
import NavigationBar from '../../components/StaffHome/NavigationBar.vue';
import Logout from '../../components/StaffHome/Logout.vue';
</script>
<template>
    <card :pt="{ root: { class: 'w-full mx-3 h-full my-3 bg-transparent shadow-none' } }">
        <template #content>
            <NavigationBar  v-once/>
            <RouterView v-once />
        </template>
    </card>
    <Logout />
</template>