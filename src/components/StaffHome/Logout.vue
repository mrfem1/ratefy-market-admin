<script setup>
import { useRouter } from 'vue-router';
import { useAdminStore } from '../../stores/AdminStore'
import axios from 'axios';

    const auth  = useAdminStore();
    const router =  useRouter();
    const logOut = async ()  => {
        await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
        const response = await axios({
            method: 'post',
            url: 'https://staffbased.ratefy.co/api/logout',
            headers: {'Authorization': 'Bearer ' + auth.admin.token},
        }).catch(function(error) {
            if (error.response) {               
                console.log(error.response);
            }
        });
        auth.resetAdminDetail();
        router.push('/staff');
    }

    
</script>

<template>
    <SpeedDial 
        @click="logOut" 
        showIcon="pi pi-sign-out" 
        direction="left" 
        :style="{ top: 'calc(100% - 8rem)', right: 0, margin: '2rem' }" 
        :pt="{ button: { class: 'h-5 text-white text-xs'}, root: { class: 'w-8'}, actionIcon: { class: 'text-white text-xs'} }" 
    />
</template>