import { defineStore } from "pinia"
import { ref } from "vue"
import { useLocalStorage } from '@vueuse/core'
 export const useSuperadminStore = defineStore('superAdmin', () =>{
   const superAdmin  =  ref(useLocalStorage('superAdmin', {
         alias: null,
         authority: null,
         email: null,
         id: null,
         mobile: null,
         name: null,
         status: null,
         superStatus: null,
         token: null
       }));
   
   function saveUserDetail({alias = null, authority = null, email = null, id = null,  mobile = null, name = null, status = null, superStatus = null, token = null}) {
      superAdmin.value.alias = alias ?? null;
      superAdmin.value.authority = authority ?? null;
      superAdmin.value.email = email ?? null;
      superAdmin.value.id = id ?? null;
      superAdmin.value.mobile = mobile ?? null;
      superAdmin.value.name = name ?? null;
      superAdmin.value.status = status ?? null;
      superAdmin.value.superStatus = superStatus ?? null;
      superAdmin.value.token = token ?? null;
   }

   function resetUserDetail() {
      superAdmin.value.alias =  null;
      superAdmin.value.authority =  null;
      superAdmin.value.email =  null;
      superAdmin.value.id =  null;
      superAdmin.value.mobile = null;
      superAdmin.value.name =  null;
      superAdmin.value.status =  null;
      superAdmin.value.superStatus =  null;
      superAdmin.value.token = null;
   }

   return {superAdmin, saveUserDetail, resetUserDetail};
 })