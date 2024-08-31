<script setup>
    import TicketSnap from '@/components/StaffHome/TicketSnap.vue';
    import TradeRequest from '@/components/StaffHome/TradeRequest.vue';
    import OrderTrade from '@/components/StaffHome/OrderTrade.vue';
    
</script>
<template>
    <Card :pt="{ root: { class:  'mx-1 text-xs my-2 py-0 mx-0 px-0 shadow-none' }, content: { class: 'my-1 mx-1 py-1 px-1'} }">
        <template #content>
            
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-3/12 flex flex-col items-center justify-center gap-4 py-8">
                    <TicketSnap  v-once/>
                </div>
                <div class="w-full md:w-2/12">
                    <Divider layout="vertical" class="!hidden md:!flex"><b></b></Divider>
                    <Divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></Divider>
                </div>
                <div class="w-full md:w-7/12 py-8">
                    <div class="m-0">
                        <p>Current Transaction</p>
                        <TradeRequest v-once />
                    </div>
                    <Divider />
                    <div class="m-0">
                        <p>Trade Request</p>
                        <OrderTrade v-once />
                    </div>
                </div>
            </div>
        </template>
    </Card>
    
</template>