import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useAdminStore } from './AdminStore';

export const useDbChatStore = defineStore('dbchat', () => {
    const messages = ref([]);

    const auth = useAdminStore();

    async function makeDbChat(session, accepted) {
        await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
        const response = await axios({
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + auth.admin.token,
                'Content-Type': 'multipart/form-data'
            },
            url: 'https://transactionbased.ratefy.co/api/get-chat',
            data: {
                session: session,
                acceptance: accepted,

            }
        }).catch((error) => {
            console.log(error.response);
        });
        addMessage(response.data);
        
    }


    function addMessage(message) {
        messages.value.push(...message);
        
    }

    return { messages, addMessage,  makeDbChat }
});