<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast';
import { useRouter }  from 'vue-router'
import { useAdminStore } from '../../../stores/AdminStore'
import axios from 'axios'

const email     = ref('');
const password  = ref('');
const loading   = ref(false);
const toast     = useToast();
const router    = useRouter();
const store     = useAdminStore();
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
        store.saveAdminDetail({
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

const navigateHome = () => {router.push('adminhome')}

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
    <card :pt="{ root: { content: 'py-1' } }">
        <template #content>        
          <Card class="card flex justify-content-center" :pt="{ root: { class: 'bg-transparent shadow-none'}, title: { class: 'text-base' } }">
            <!-- <template #title>
              <p>Login</p>
            </template> -->
            <template #content>
                <p class="my-3">Login</p>
              <div class="container p-float-label">
                <InputText type="text" id="email" v-model="email" :pt="{ root: { class: 'py-2 px-2 w-52 my-2 text-xs border-2 border-stone-600' } }"  placeholder="email"  />
              </div> 
              <div class="container p-float-label mb-2">
                <InputText type="text" id="password" v-model="password"  :pt="{ root: { class: 'py-2 px-2 w-52 my-2 text-xs border-2 border-stone-600' }, label: { class: 'my-1'} }" placeholder="password" />
              </div>

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
            <Toast />
        </Card>
  
        </template>
      </card>
</template>