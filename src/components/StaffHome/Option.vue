<script setup>
 import { ref } from 'vue';
 import { useRoute } from 'vue-router';
 import { useAdminStore } from '../../stores/AdminStore';
 import { useToast } from 'primevue/usetoast';
 import { useRouter } from 'vue-router';
 import axios from 'axios';


  const route = useRoute();
  const auth = useAdminStore();
  const toast = useToast();
  const router = useRouter();
  const statusOptions = ref([
        { name: 'active', code: 'active' },
        { name: 'paused', code: 'paused' },
  ]);
  const status = ref();
  const option = ref();


  const createOption = async () => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        method: 'POST',
        url: 'https://staffbased.ratefy.co/api/create-wallet-option',
        headers: {
            'Authorization': 'Bearer ' + auth.admin.token
        },
        data: {
            option: option.value,
            status: status.value.name,
            uuid: route.params.uuid,
        }
    }).catch((error) => {  
        console.log(error.response)
    });

    router.go();
    show('Successfull');
    
    
  }

  const show = (data) => {
    toast.add({ severity: 'info', summary: 'Info', detail: data, life: 3000 });
  }

</script>
<template>
    <Card :pt="{ root: { class:  'mx-1 text-xs mx-0 my-2 py-0 shadow-none' } }">
        <template #content>
            <Fieldset legend="Create Options" :pt="{ legend: { class: 'text-xs border border-1 rounded-0 py-2 px-2 mb-3'}, content: { class: 'mx-0 px-0' } }">
                <div class="grid grid-cols-3 gap-1 mb-3">
                    <div class="flex flex-column gap-2">
                        <InputText id="name" type="text" v-model="option" :pt="{root: { class: 'w-40 py-2 px-2 my-2 border-2 text-black border-stone-600 text-xs'}, label: { class: 'text-xs'}, input: { class: 'text-xs'} }" placeholder="Option" />
                    </div>
                    
                    <div class="flex flex-column gap-2">
                        <Dropdown v-model="status" :options="statusOptions" optionLabel="name" placeholder="select a status" :pt="{ 
                            root: { class: 'w-40 border-2 my-2 border-stone-600'}, 
                            input: { class: 'my-1 py-1 px-2 text-xs'}, 
                            panel: { class: 'w-40 text-xs' }, 
                            itemGroup: { class: 'text-sm' },
                            trigger: { class: 'text-sm' }
                            }" />
                    </div>
                    <Button label="Create Options" :pt="{ root: { class: 'w-40 bg-cyan-600 py-0 my-2' }, label: { class: 'text-xs text-white my-0 py-0 mx-2' } }" @click="createOption" />
                </div>                
            </Fieldset>
            
        </template>
    </Card>
    <Toast />
</template>