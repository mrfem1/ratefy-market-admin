<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast';
import { useRouter }  from 'vue-router'
import { useSuperadminStore } from '../../../stores/SuperadminStore'
import axios from 'axios'

const email     = ref('');
const password  = ref('');
const loading   = ref(false);
const toast     = useToast();
const router    = useRouter();
const store     = useSuperadminStore();
const error     = () => {
    toast.add({ severity: 'Error', summary: 'Error', detail: 'Email or password is empty', life: 3000 });
};
const authInvalid = () => {
    toast.add({ severity: 'Error', summary: 'Error', detail: 'Email or password does not match', life: 3000 });
};


const authenticate = async ()  => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        method: 'post',
        url: 'https://staffbased.ratefy.co/api/login',
        data: {
            // sudo: sudo.value,
            email: email.value,
            password: password.value,
        }
    }).catch(function(error) {
        if (error.response) {
            authInvalid();
            loading.value = false;
        }
    });
     
    if(response.status == 200)
    {
        store.saveUserDetail({
            alias : response.data.user.alias, 
            authority : response.data.user.authority, 
            email : response.data.user.email, 
            id : response.data.user.id,  
            mobile : response.data.user.mobile, 
            name : response.data.user.name, 
            status : response.data.user.status, 
            superStatus : response.data.user.super,
            token: response.data.token
        }); 
        loading.value = false;
        navigateHome();
    }
}

const navigateHome = () => {router.push('sudo')}

const load = () => {
    loading.value = true;
    if(email.value === '' || password.value === '') {
        error();
        loading.value = false;
    }else {
        authenticate();
    }
    
};

</script>
<template>

        <p class="text-sm font-bold mb-3">Login</p>
        <span class="p-float-label text-sm">
            <InputText id="email" v-model="email" :pt="{
                root: { class: 'py-2 w-52 text-xs border-2 border-stone-600' }
            }" />
            <label for="email">Email</label>
        </span>
       <Divider :pt="{ 
        root: {class: 'border-0 my-1'}
        }" />
        <Password v-model="password" :pt="{
            root: { class: 'py-1 h-12 text-xs' },
            info: { class: 'text-xs' },
   
        }" placeholder="Password" />
            
        <Divider :pt="{ 
            root: {class: 'border-0 my-1'}
            }" />
        <Toast />    
        <Button 
            type="button" 
            label="Login" 
            :loading="loading" 
            @click="load"
            :pt="{
                root: { class: 'px-3 bg-black py-2 text-white w-52'}
            }"
         />

        

</template>
<style scoped>
.mb-3 {
    margin-bottom: 25px;
}
</style>