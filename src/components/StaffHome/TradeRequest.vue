<script setup>
    import { ref, onMounted, computed  } from 'vue';
    import { useAdminStore } from '@/stores/AdminStore';
    import { useTradeRequestStore } from '../../stores/TradeRequest';
    import axios from 'axios';

    const auth = useAdminStore(); 
    const trades = useTradeRequestStore();


    const getCurrentTickets = async () => {
        await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
        const response = await axios({
            method: 'GET',
            url: 'https://staffbased.ratefy.co/api/get-p2p-by-latest-5',
            headers: {
                'Authorization': 'Bearer ' + auth.admin.token
            }
        }).catch((error) => {
            console.log(error.response);
        });

        trades.saveTradeRequestList(JSON.parse(response.data));
        
    }

    onMounted(() => {
        getCurrentTickets();
    });

</script>
<template>
    <DataTable v-if="trades" :value="trades.trades" dataKey="id" :pt="{ tbody: { class: 'text-xs, bg-white'},  thead: { class: 'invisible'}, }">
        <Column  field="acceptance_id"></Column>
        <Column  field="item_name"></Column>
        <Column  field="amount"></Column>
        <Column  field="amount_to_receive"></Column>
        
        <Column  field="session_status"></Column>
        
    </DataTable>
    <div v-else class="w-full xl:w-6/12 p-1">
                <Skeleton height="2rem"  width="20rem" class="mb-2"></Skeleton>
                <Skeleton height="2rem"  class="mb-2"></Skeleton>
                <Skeleton height="2rem"  class="mb-2"></Skeleton>
            </div>
</template>