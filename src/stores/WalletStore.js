import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useWalletStore = defineStore('wallets', () => {
    const wallets = ref(useLocalStorage('wallets', []));

    function saveWalletList(wallet) {
        wallets.value = wallet
    }

    return { wallets, saveWalletList }
})