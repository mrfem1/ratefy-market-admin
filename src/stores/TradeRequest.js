import { ref } from 'vue';
import { defineStore  } from 'pinia';
import { useLocalStorage  } from '@vueuse/core';

export const useTradeRequestStore = defineStore('trades', () => {
    const trades = ref(useLocalStorage('trades', []))

    function saveTradeRequestList(trade) {
        trades.value = trade;
    }

    return { trades, saveTradeRequestList }
});