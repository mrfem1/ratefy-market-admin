import { defineStore } from "pinia";
import { ref } from "vue";
import pusher from "../chat/config";


export const useChatStore = defineStore('chat', () => {

    const messages = ref([]);
    let channel = null;


    function initializePusher(authSession) {
        channel = pusher.subscribe('Chat.' + authSession);
        channel.bind("App\\Events\\TransactionChat", (data) => {
            console.log(data);
            addMessage(data);
        });
    }

    function addMessage(message) {
        messages.value.push(message);
    }

    async function sendMessage() {
        await fetch("http://your-backend-server/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ messages })
        });
    }

    return { messages, initializePusher, addMessage, sendMessage }

});