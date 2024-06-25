import { ref } from 'vue';
import { defineStore  } from 'pinia';
import { useLocalStorage  } from '@vueuse/core';

export const useUsersStore = defineStore('users', () => {
    const users = ref(useLocalStorage('users', []))

    function saveUsersList(user) {
        users.value = user;
    }

    return { users, saveUsersList }
});