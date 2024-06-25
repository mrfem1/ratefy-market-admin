<script setup>
import { ref } from "vue";
import { useSuperadminStore } from "@/stores/SuperadminStore";
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import axios from 'axios';


const authoStore = useSuperadminStore();
const toast     = useToast();
const router     = useRouter();
const loading   = ref(false);
const authority = ref(null);
const status = ref(null);
const position = ref([
    { name: 'hr', code: 'hr' },
    { name: 'director', code: 'director' },
    { name: 'senior', code: 'senior' },
    { name: 'junior', code: 'junior' },
    { name: 'newbie', code: 'newbie' }
]);
const jobStatus = ref([
    { name: 'active', code: 'active' },
    { name: 'queried', code: 'queried' },
    { name: 'suspended', code: 'suspended' },
    { name: 'revoked', code: 'revoked' },
    { name: 'sacked', code: 'sacked' },
    { name: 'intern', code: 'intern' },
    { name: 'nysc', code: 'nysc' },
    { name: 'training', code: 'training' },
    { name: 'contract', code: 'contract' }
]);


const error     = () => {
    toast.add({ severity: 'Error', summary: 'Error', detail: 'Email or password is empty', life: 3000 });
};
const name      =  ref(null);
const email     =  ref(null);
const alias     =  ref(null);
const mobile    =  ref(null);


const createAdmin = async () => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        method: 'POST',
        headers: {'Authorization': 'Bearer '+authoStore.superAdmin.token},
        url: 'https://staffbased.ratefy.co/api/create-admin',
        data: {
            name:       name.value,
            email:      email.value,
            alias:      alias.value,
            mobile:     mobile.value,
            authority:  authority.value.name,
            status:     status.value.name,
        }
    }).catch(function(error) {
        console.log(error.response)
    });

    if(response.status == 200){
        loading.value = false;
        router.push('/sudo-home')
    }

}

console.log(authoStore.superAdmin.token);
const load = () => {
    loading.value = true;
    if(name.value === null || email.value === null || alias.value === null || mobile.value === null || authority.value === null || status.value === null) {
        error();
        loading.value = false;
    }else {
        createAdmin();
    }
    
};
</script>
<template>
    <Card :pt="{ root: { class:  'bg-transparent border-0 shadow-none w-full px-0' },  content: { class: 'text-xs'} }">
        <template #content>
            <Fieldset legend="Admit Employee" :pt="{ legendTitle: { class: 'text-xs font-normal roboto' }, legend: { class: 'py-3 px-3 border border-1'} }">
                    
                    <div class="container mx-auto px-2">
                        <div class="grid grid-cols-3 gap-2">
                            <span class="p-float-label text-xs">
                                <InputText id="name" v-model="name" :pt="{root: { class: 'w-40 py-2 px-2 my-1 border-2 border-stone-600 text-xs'}, label: { class: 'text-xs'}, input: { class: 'text-xs'} }" />
                                <label for="name" class="text-xs">Name</label>
                            </span>
                            <span class="p-float-label text-xs">
                                <InputText id="username" v-model="email" :pt="{root: { class: 'w-40 py-2 px-2 my-1 border-2 border-stone-600 text-xs'}, label: { class: 'text-xs'}, input: { class: 'text-xs'} }" />
                                <label for="username" class="text-xs">Email</label>
                            </span>
                            <span class="p-float-label text-xs">
                                <InputText id="username" v-model="alias" :pt="{root: { class: 'w-40 py-2 px-2 my-1 border-2 border-stone-600 text-xs'}, label: { class: 'text-xs'}, input: { class: 'text-xs'} }" />
                                <label for="username" class="text-xs">Alias</label>
                            </span>
                        </div>
                        <Divider :pt="{root: {class: 'my-3'} }"/>
                        <div class="grid grid-cols-3 gap-2">
                            <span class="p-float-label text-xs">
                                <InputText id="username" v-model="mobile" :pt="{root: { class: 'w-40 py-2 px-2 my-2 border-2 border-stone-600 text-xs'}, label: { class: 'text-xs'}, input: { class: 'text-xs'} }" />
                                <label for="username" class="text-xs">Mobile</label>
                            </span>
                            <span class="p-float-label text-xs">
                                <Dropdown v-model="authority" :options="position" optionLabel="name" placeholder="Select a City"  :pt="{ 
                                    root: { class: 'w-40 border-2 my-2 border-stone-600'}, 
                                    input: { class: 'my-1 py-1 px-2 text-xs'}, 
                                    panel: { class: 'w-40 text-xs' }, 
                                    itemGroup: { class: 'text-sm' },
                                    trigger: { class: 'text-sm' }
                                 }"/>
                                <label for="username" class="text-xs">Position</label>
                            </span>
                            <span class="p-float-label text-xs">
                                <Dropdown v-model="status" :options="jobStatus" optionLabel="name" placeholder="Select a City"  :pt="{ 
                                    root: { class: 'w-40 border-2 my-2 border-stone-600'}, 
                                    input: { class: 'my-1 py-1 px-2 text-xs'}, 
                                    panel: { class: 'w-40 text-xs' }, 
                                    itemGroup: { class: 'text-sm' },
                                    trigger: { class: 'text-sm' }
                                 }"/>
                                <label for="username" class="text-xs">Status</label>
                            </span>
                        </div>
                        <Divider :pt="{root: {class: 'my-3'} }"/>
                        <Toast :pt="{ summary: { class: 'text-xs' }, detail: { class: 'text-xs' }, closeButton: { class: 'text-rose-500' } }" />
                        <Button 
                                type="button" 
                                label="Admit Employee" 
                                :loading="loading" 
                                @click="load"
                                :pt="{
                                    root: { class: 'px-3 bg-black py-2 text-white w-52'},
                                    label: { class: 'text-xs font-light'}
                                }"
                            />
                    </div>
 
            </Fieldset>
        </template>
    </Card>
</template>