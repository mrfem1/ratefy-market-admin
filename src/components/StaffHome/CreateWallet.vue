<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAdminStore } from '../../stores/AdminStore';
    import { useToast } from 'primevue/usetoast';
    import axios from 'axios';

    const auth = useAdminStore();
    const router = useRouter();
    const toast = useToast();

    const status = ref('');
    const wallet_name = ref('');
    const currency = ref('');
    const image_url = ref('');
    const errorMessage = ref('');

    const catStatus = ref([
        {name: 'active', code: 'active'},
        {name: 'paused', code: 'paused'},
    ]);
    const catCurrency = ref([
        {name: 'USD', code: 'USD'},
        {name: 'GBP', code: 'GBP'},
        {name: 'EUR', code: 'EUR'},
    ]);

    const  createWallet = async () => {
        await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
        const response = await axios({
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + auth.admin.token,
                'Content-Type': 'multipart/form-data'
            },
            url: 'https://offerbased.ratefy.co/api/admin/create-ewallet',
            data: {
                ewallet_name:    wallet_name.value,
                currency:       currency.value,
                status:         status.value,
                photo:          image_url.value
            }
        }).catch((error) => {  
            errorMessage.value = error.response.data.errors.ewallet_name[0];
            show();
        });

        if(response.status === 200) {
            navigate();
        }
    }


    const show = () => {
        toast.add({ severity: 'danger', summary: 'Error', detail: errorMessage.value, life: 3000 });
    };

    const navigate = () => {
        router.push('/adminhome')
    }


    const customBase64Uploader = async (event) => {
        const file = event.files[0];
        image_url.value = file;

    };
</script>
<template>
   
    <Fieldset legend="Create Wallet" :pt="{ legend: { class: 'text-xs border border-1 py-2 px-2'} }">
        <div  class="container mx-auto px-2">
            <div class="grid grid-cols-2 gap-2">

                <div class="flex flex-column gap-2">
                    <InputText type="text" v-model="wallet_name" :pt="{root: { class: 'w-60 py-2 px-2 my-1 border-2 border-stone-600 text-xs text-black'}, label: { class: 'text-xs'}, input: { class: 'text-xs'} }"  placeholder="Wallet Name" />
                </div>
                <!-- <span class="p-float-label text-xs">
                    <InputText id="name" v-model="wallet_name" :pt="{root: { class: 'w-60 py-2 px-2 my-1 border-2 border-stone-600 text-xs'}, label: { class: 'text-xs'}, input: { class: 'text-xs'} }" />
                    <label for="name" class="text-xs">Name</label>
                </span> -->

                <div class="flex flex-column gap-2">
                    <Dropdown v-model="currency" :options="catCurrency" optionLabel="name" placeholder="select a state"  :pt="{ 
                        root: { class: 'w-64 border-2 my-1 border-stone-600'}, 
                        input: { class: 'my-1 py-1 px-2 text-xs'}, 
                        panel: { class: 'w-40 text-xs' }, 
                        itemGroup: { class: 'text-sm' },
                        trigger: { class: 'text-sm' }
                        }"/>
                </div>
                <!-- <span class="p-float-label text-xs">
                    <Dropdown v-model="currency" :options="catCurrency" optionLabel="name" placeholder="select a state"  :pt="{ 
                        root: { class: 'w-64 border-2 my-1 border-stone-600'}, 
                        input: { class: 'my-1 py-1 px-2 text-xs'}, 
                        panel: { class: 'w-40 text-xs' }, 
                        itemGroup: { class: 'text-sm' },
                        trigger: { class: 'text-sm' }
                        }"/>
                    <label for="currency" class="text-xs">Currency</label>
                </span> -->
            </div>
            <Divider :pt="{root: {class: 'my-3'} }"/>
            <div class="grid grid-cols-3 gap-1">
            <!--    <span class="p-float-label text-xs">
                    <Dropdown v-model="status" :options="catStatus" optionLabel="name" placeholder="select a state"  :pt="{ 
                        root: { class: 'w-40 border-2 my-2 border-stone-600'}, 
                        input: { class: 'my-1 py-1 px-2 text-xs'}, 
                        panel: { class: 'w-40 text-xs' }, 
                        itemGroup: { class: 'text-sm' },
                        trigger: { class: 'text-sm' }
                        }"/>
                    <label for="status" class="text-xs">Status</label>
                </span> -->

                <div class="flex flex-column gap-2">
                    <Dropdown v-model="status" :options="catStatus" optionLabel="name" placeholder="select a state"  :pt="{ 
                        root: { class: 'w-40 border-2 my-2 border-stone-600'}, 
                        input: { class: 'my-1 py-1 px-2 text-xs'}, 
                        panel: { class: 'w-40 text-xs' }, 
                        itemGroup: { class: 'text-sm' },
                        trigger: { class: 'text-sm' }
                        }" />
                </div>
                

                <FileUpload mode="basic" name="image_url"  accept="image/*" :maxFileSize="1000000" customUpload @uploader="customBase64Uploader" :pt="{ label: { class: 'text-[12px] font-light my-0 py-0'}, chooseButton: { class: 'h-9 my-2 px-5' } }" />
                <!-- <FileUpload mode="basic"  name="image_url" accept="image/*"  :maxFileSize="1000000" customUpload @uploader="customBase64Uploader" :pt="{ chooseButton: { class: 'w-40 h-9 my-2' }, label: { class: 'text-xs font-light'}, chooseIcon: { class: 'font-light'} }" /> -->
                
                <Button label="Create Ewallet" :pt="{ root: { class: 'w-40 bg-black py-0 my-2 h-9' }, label: { class: 'text-xs text-white my-0 py-0 mx-2' } }" @click="createWallet" />
            </div>
        </div>
        <Toast :pt="{ summary: { class: 'text-rose-500' }, buttonIcon: { class: 'text-rose-500' }, text: { class: 'text-xs'} }" />
    </Fieldset>
    
</template>