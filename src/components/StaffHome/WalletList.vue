<script setup>
import { ref, computed } from 'vue';
import { useAdminStore } from '../../stores/AdminStore';
import { useWalletStore } from '../../stores/WalletStore';
import { useToast } from 'primevue/usetoast';

import axios from 'axios';

const auth = useAdminStore();
const wallets = useWalletStore();
const toast = useToast();
const result = ref();

const show = (id) => { toast.add({ severity: 'danger', summary: 'Error', detail: id, life: 60000 }); };
const fetchWallet = async  () => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        url: 'https://staffbased.ratefy.co/api/fetch-wallet',
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + auth.admin.token},
    }).catch((error) => {
        console.log(error.resposne)
    });
    
    wallets.saveWalletList(await JSON.parse(response.data.data));
}

const pauseWallet = async (uuid) => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + auth.admin.token,
            'Content-Type': 'multipart/form-data'
        },
        url: 'https://staffbased.ratefy.co/api/pause-wallet',
        data: {
            uuid:    uuid,
        }
    }).catch((error) => {  
        console.log(error.response)
        show();
    });

    result.value = JSON.parse(response.data.data);
    show(result.value.data);
}


const activateWallet = async (uuid) => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + auth.admin.token,
            'Content-Type': 'multipart/form-data'
        },
        url: 'https://staffbased.ratefy.co/api/activate-wallet',
        data: {
            uuid:    uuid,
        }
    }).catch((error) => {  
        console.log(error.response)
        show();
    });
    
    result.value = JSON.parse(response.data.data);
    show(result.value.data);
}
    

const wallet = computed({
    get() {
        return Object.values(wallets.wallets.data)            
    }  
});

const pause = (id) => {
    pauseWallet(id);
    fetchWallet();  
}

const activate = (id) => {
    activateWallet(id);
    fetchWallet();  
}

fetchWallet();  

</script>
<template>
    <DataTable :value="wallet" columnResizeMode="" responsiveLayout="scroll" :pt="{ thead: { class: 'text-xs'}, tbody: { class: 'text-xs h-5'},	footer: { class: 'text-xs py-2 rounded-b'} }">
        <Column header="Image">
            <template #body="slotProps">
                <img :src="`https://offerbased.ratefy.co/storage/images/ewallets/${slotProps.data.image_url}`" :alt="slotProps.data.image" class="w-6 h-6 rounded-full shadow-2 border-round" />
            </template>
        </Column>
        <Column field="ewallet_name" header="Name"></Column>
        <Column field="currency" header="currency"></Column>
        <Column field="status" header="status"></Column>
        <Column  header="Actions">
            <template #body="slotProps">
                <Button label="Pause"    :pt="{ root: { class: 'h-7 text-xs text-white  bg-cyan-900 my-1 mx-1 px-3 py-0' }, label: { class: 'font-light'} }" @click="pause(slotProps.data.uuid)" rounded />
                <Button label="Activate"  :pt="{ root: { class: 'h-7 text-xs text-white  bg-blue-900 my-1 mx-1 px-3 py-0'}, label: { class: 'font-normal' } }" @click="activate(slotProps.data.uuid)" rounded />
                <router-link :to="{ name: 'options', params: { uuid: slotProps.data.uuid } }">
                    <i class="pi pi-clone my-2 mx-2 text-violet-500 cursor-pointer"></i>
                </router-link>
            </template> 
        </Column>
        <template #footer>
             In total there are {{ wallets ? wallets.length : 0 }} wallets. 
        </template>
    </DataTable>
    <Toast :pt="{ summary: { class: 'text-cyan-400 border border-1' }, buttonIcon: { class: 'text-cyan-400' }, text: { class: 'text-xs'} }" />
</template>