<script setup>
    import { ref } from 'vue';
    import { useAdminStore } from '../../stores/AdminStore';
    import { useRoute } from 'vue-router';
    import { useToast } from 'primevue/usetoast';
    import { useRouter } from 'vue-router';
    import axios from 'axios';

    const route = useRoute();
    const auth = useAdminStore();
    const toast = useToast();
    const router = useRouter();
    const requiremnt = ref();
    const requirmentsOptions = ref([
        { name: 'active', code: 'active' },
        { name: 'paused', code: 'paused' },
    ]);

    const status = ref();

    const submitRequiremnt = async () => {
        await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
        await axios({
            method: 'POST',
            url: 'https://offerbased.ratefy.co/api/admin/create-requiremnts',
            headers: {
                'Authorization': 'Bearer ' + auth.admin.token
            },
            data: {
                requirement: requiremnt.value,
                status: status.value.name,
                id: route.params.uuid,
            }
        }).catch((error) => {  
            console.log(error.response)
        });

        show('Successfull');

        setTimeout(() => {router.go(); }, 3000);
        
    }

    const show = (data) => {
        toast.add({ severity: 'info', summary: 'Info', detail: data, life: 3000 });
    }
</script>
<template>
<Card :pt="{ root: { class: 'mx-1 text-xs my-2 py-0 mx-0 px-0 shadow-none bg-transparent' }, content: { class: 'my-1 mx-0 py-1 px-1'} }">
        <template #content>
            <Fieldset legend="Create Requirement" :pt="{ legend: { class: 'text-xs border border-1 rounded-0 py-2 px-2 mb-3'}, content: { class: 'mx-0 px-0' } }">
                <div class="grid grid-cols-3 gap-1 mb-3">
                    <div class="flex flex-column gap-2">
                        <InputText id="name" type="text" v-model="requiremnt" :pt="{root: { class: 'w-40 py-2 px-2 my-2 border-2 text-black border-stone-600 text-xs'}, label: { class: 'text-xs'}, input: { class: 'text-xs'} }" placeholder="requiremnt" />
                    </div>
                    
                    <div class="flex flex-column gap-2">
                        <Dropdown v-model="status" :options="requirmentsOptions" optionLabel="name" placeholder="select a status" :pt="{ 
                            root: { class: 'w-40 border-2 my-2 border-stone-600'}, 
                            input: { class: 'my-1 py-1 px-2 text-xs'}, 
                            panel: { class: 'w-40 text-xs' }, 
                            itemGroup: { class: 'text-sm' },
                            trigger: { class: 'text-sm' }
                            }" />
                    </div>
                    <Button label="Submit Requirment" :pt="{ root: { class: 'w-40 bg-cyan-600 py-0 my-2' }, label: { class: 'text-xs text-white my-0 py-0 mx-2' } }" @click="submitRequiremnt" />
                </div>                
            </Fieldset>
            <Toast :pt="{ summary: { class: 'text-rose-500' }, buttonIcon: { class: 'text-rose-500' }, text: { class: 'text-xs'} }" />
        </template>
    </Card>
</template>