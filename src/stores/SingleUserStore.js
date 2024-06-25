import { ref } from 'vue';
import { defineStore  } from 'pinia';
import { useLocalStorage  } from '@vueuse/core';

export const useSingleUsersStore = defineStore('singleuser', () => {
    const singleuser = ref(useLocalStorage('singleuser'))

    function saveSingleUser(user) {
        singleuser.value = user;
    }

    return { singleuser, saveSingleUser }
});