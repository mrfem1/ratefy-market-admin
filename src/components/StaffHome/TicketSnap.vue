<script setup> 
    import { ref, onMounted, computed  } from 'vue';
    import { useAdminStore } from '@/stores/AdminStore';
    import { useTicketSnapStore } from '../../stores/TicketSnap';
    import axios from 'axios';

    const auth = useAdminStore(); 
    const tickets = useTicketSnapStore();


    const getCurrentTickets = async () => {
        await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
        const response = await axios({
            method: 'GET',
            url: 'https://staffbased.ratefy.co/api/get-tickets-by-latest-5',
            headers: {
                'Authorization': 'Bearer ' + auth.admin.token
            }
        }).catch((error) => {
            console.log(error.response);
        });

        tickets.saveTicketSnapList(JSON.parse(response.data));
        
    }

    onMounted(() => {
        getCurrentTickets();
    });

</script>
<template>
   <div class="card">
        <DataView :value="tickets.tickets" >
            <template #list="slotProps">
                <div class="flex flex-col">
                    <div v-for="(item, index) in slotProps.items" :key="index">
                        <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                                    </div>
                                    <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                        <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col md:items-end gap-8">
                                    <span class="text-xl font-semibold">${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button icon="pi pi-heart" outlined></Button>
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template> 