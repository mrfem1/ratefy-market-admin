import { ref } from 'vue';
import { defineStore  } from 'pinia';
import { useLocalStorage  } from '@vueuse/core';

export const useTicketSnapStore = defineStore('tickets', () => {
    const tickets = ref(useLocalStorage('tickets', []))

    function saveTicketSnapList(ticket) {
        tickets.value = ticket;
    }

    return { tickets, saveTicketSnapList }
});