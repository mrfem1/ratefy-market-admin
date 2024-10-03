<script setup>
 import { ref, computed } from 'vue';
 import { useRoute } from 'vue-router';
 import { useAdminStore } from '../../stores/AdminStore';
 import axios from 'axios';

 const route = useRoute();
 const auth = useAdminStore();
 const walletOptions = ref(); 
 const wallets = ref(); 
 
 const fetchOption = async () => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        method: 'POST',
        url: 'https://staffbased.ratefy.co/api/fetch-wallet-option',
        headers: {
            'Authorization': 'Bearer ' + auth.admin.token
        },
        data: {
            uuid: route.params.uuid,
        }
    }).catch((error) => {  
        console.log(error.response)
    });

    walletOptions.value = await JSON.parse(response.data)
    wallets.value = walletOptions.value.data.paymentoption;
}

fetchOption();
</script>
<template>
    <Panel v-for="item in wallets" v-bind:key="item.id"  collapsed :pt="{ root: { class: 'text-xs px-10 my-2'}, togglerIcon: { class: 'w-2'}, header: { class: 'rounded py-1' } }">
        <template #header>
            <div class="flex flex-row pt-2 w-full">
                <span  class="basis-5/6 font-bold">{{ item.option }}</span>
                <span  class="basis-1/6 float-right font-normal">
                    <small class="cursor-pointer">Requirement</small>
                    <router-link :to="{ name: 'requirements', params: { uuid: item.id } }">
                        <i class="pi pi-sitemap my-2 mx-2 text-violet-500 cursor-pointer"></i>
                    </router-link>
                    
                </span>
            </div>
        </template>
    </Panel>
    
</template>