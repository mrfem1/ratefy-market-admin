<script setup>
import { useRouter } from 'vue-router'
import { useSuperadminStore } from '../stores/SuperadminStore'
import SudoMenuBar from '../components/SudoHome/SudoMenuBar.vue'


const router = useRouter()
const store = useSuperadminStore()

if(store.superAdmin.id === null) {
      router.push('home')
}

const logout = () => {
    store.resetUserDetail();
    router.push('/home');
}

</script>
<template>
    
    <Card :pt="{ root: { class:  'bg-transparent border-0 shadow-none w-full mx-5' },  content: { class: 'text-xs'} }">
        <template #content>
            <SudoMenuBar />
            <router-view> </router-view>
        </template>
    </Card>

    <SpeedDial @click="logout" showIcon="pi pi-home" direction="left" :style="{ top: 'calc(100% - 6rem)', right: 0, margin: '1rem' }" :pt="{ button: { class: 'w-5 h-5'} }" />
</template>
<style scoped>


</style>