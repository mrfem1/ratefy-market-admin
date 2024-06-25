import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useAdminStore = defineStore('admin', () => {
    const admin = ref(useLocalStorage('admin', {
        alias: null,
         authority: null,
         email: null,
         id: null,
         mobile: null,
         name: null,
         status: null,
         superStatus: null,
         token: null
    }))

    function saveAdminDetail({alias = null, authority = null, email = null, id = null,  mobile = null, name = null, status = null, superStatus = null, token = null}) {
        admin.value.alias = alias ?? null;
        admin.value.authority = authority ?? null;
        admin.value.email = email ?? null;
        admin.value.id = id ?? null;
        admin.value.mobile = mobile ?? null;
        admin.value.name = name ?? null;
        admin.value.status = status ?? null;
        admin.value.superStatus = superStatus ?? null;
        admin.value.token = token ?? null;
     }
  
     function resetAdminDetail() {
        admin.value.alias =  null;
        admin.value.authority =  null;
        admin.value.email =  null;
        admin.value.id =  null;
        admin.value.mobile = null;
        admin.value.name =  null;
        admin.value.status =  null;
        admin.value.superStatus =  null;
        admin.value.token = null;
     }

    return {admin, saveAdminDetail, resetAdminDetail }
})