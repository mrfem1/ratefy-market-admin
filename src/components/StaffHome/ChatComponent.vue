<script setup>
import { defineProps, ref, computed } from 'vue';
import { useChatStore } from '@/stores/ChatStore';
import { useDbChatStore } from '@/stores/DbChatStore';

const chat = useChatStore();
const dbChat = useDbChatStore();
const chatAuth = ref(null);
const props = defineProps({
    session: String,
    acceptance: String,
    buyer: String,
    seller: String
});

chatAuth.value = props.acceptance + '-'+ props.session;

const combinedMessages = computed(() => {
    return [...dbChat.messages, ...chat.messages];
    // return [...chat.messages, ...dbChat.messages ];
});

chat.initializePusher(chatAuth.value);
dbChat.makeDbChat(props.session, props.acceptance);


</script>
<template>
    <div class="h-full flex flex-col-reverse justify-end pb-5">
        <div class="mx-0 px-0" v-for="({id, acceptance, content, contentType, image, receiver, sender, status, timestamp }) in combinedMessages.reverse()">
            <div class="flex flex-col mx-0 px-0">
                <p class="text-sm text-gray py-1  shadow-2xl my-1 mx-1 py-1 px-2 rounded-r-lg rounded-bl-lg bg-white w-5/6 self-start" v-if="sender === buyer">
                    <small class="tracking-widest">{{ "Buyer" }} </small> <hr class="my-1"> <span class="font-medium tracking-tighter">{{ content }}</span>   </p>
                <p class="text-sm text-gray py-1 shadow-2xl my-1 mx-1  py-1 px-2 rounded-l-lg rounded-br-lg bg-white w-5/6 self-end"  v-else-if="sender === seller">
                    <small class="tracking-widest">{{ "Seller" }} </small> <hr class="my-1"> <span class="font-medium tracking-tighter">{{ content }}</span>  </p>
                <p class="text-sm text-gray py-1 shadow-2xl my-1 mx-1  py-1 px-2 rounded-bl-lg rounded-br-lg  bg-white w-5/6 self-center" v-else>
                    <small class="tracking-widest">{{ "Admin" }} </small> <hr class="my-1"> <span class="font-medium tracking-tighter">{{ content }}</span>  </p> 
            </div>      
        </div>
    </div>
</template>