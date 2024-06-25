import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useStaffStore = defineStore('staff', () => {
    const staff = ref(useLocalStorage('staff', 
         []
    ));

    function deleteStaff() {
        staff.value = null;
    }

    function saveUsersList(staffs) {
        staff.value = staffs;
    }

   
    return { staff,  deleteStaff, saveUsersList  };

})