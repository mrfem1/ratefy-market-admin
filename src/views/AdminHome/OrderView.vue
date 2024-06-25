<script setup>
import { ref } from 'vue';
import { useAdminStore } from '@/stores/AdminStore';
import axios from 'axios';

const orderList = ref();
const orders = ref();
const auth = useAdminStore();

const getOrder = async () => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        method: 'GET',
        url: 'https://staffbased.ratefy.co/api/get-p2p-orders',
        headers: {
            'Authorization': 'Bearer ' + auth.admin.token
        }
    }).catch((error) => {
        console.log(error.response);
    });

    orderList.value = JSON.parse(response.data);
    orders.value = orderList.value.data;
    console.log(JSON.parse(response.data));
}

getOrder();


</script>
<template>
    <Card :pt="{ root: { class: 'mx-1 text-xs my-2 py-0 mx-0 px-0 shadow-none' }, content: { class: 'my-1 mx-1 py-1 px-1'} }">
        <template #content>
            <Panel v-for="item in orders" v-bind:key="item.id" collapsed :pt="{ root: { class: 'text-xs my-2 bg-gray-200'}, togglerIcon: { class: 'w-2'}, header: { class: 'rounded py-1' } }"> 
                <template #header>
                        <div class="w-full flex flex-row">
                            <div class="flex basis-7/12 px-2 py-1">
                                <small  class="text-xs">Session: {{ item.session_id }}</small>
                            </div>
                            <div class="flex basis-2/12 px-2 py-1">
                                <small  class="text-xs">Duration: {{ item.duration }}</small>
                            </div>
                            <div class="flex basis-1/12 px-2 py-1">
                                <small  class="text-xs">{{ item.item_name }}</small>
                            </div>
                            <div class="flex basis-2/12 px-2 py-1">
                                <Button
                                    label="view activity"
                                    severity="success"
                                    :pt="{
                                    label: { class: 'text-white text-[12px]' },
                                    icon: { class: 'text-white text-[12px] mr-2' },
                                    root: { class: 'bg-cyan-800 py-2 px-2 mx-2' },
                                    }"
                                />
                            </div>
                        </div>
                </template>
            </Panel>
        </template>
    </Card>
    
</template>