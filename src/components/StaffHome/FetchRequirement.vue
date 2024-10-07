<script setup>
    import { ref } from 'vue';
    import { useAdminStore } from '../../stores/AdminStore';
    import { useRoute } from 'vue-router';
    import axios from 'axios';

    const route = useRoute();
    const auth = useAdminStore();
    const requirementsList = ref();
    const requirements = ref();
    const fetchRequirements = async () => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({   
            method: 'POST',
            url: 'https://offerbased.ratefy.co/api/admin/fetch-requiremnts',
            headers: {
                'Authorization': 'Bearer ' + auth.admin.token
            },
            data: {
                id: route.params.uuid,
            }
        }).catch((error) => {  
            console.log(error.response)
        }); 

        requirementsList.value =   response.data;
        requirements.value = requirementsList.value;
    }

    fetchRequirements();
</script>
<template>
     <Card :pt="{root: { class: 'mx-1 text-xs my-2 py-0 mx-0 px-0 shadow-none bg-transparent' }, content: { class: 'my-1 mx-0 py-1 px-1'}  }">
        <template #content>
            <Panel v-for="item in requirements" v-bind:key="item.id"  collapsed :pt="{ root: { class: 'text-xs px-10 my-2'}, togglerIcon: { class: 'w-2'}, header: { class: 'rounded py-1' } }">
                <template #header>
                    <div class="flex flex-row pt-2 w-full">
                        <span  class="basis-5/6 font-bold">{{ item.requirement }}</span>
                        <span  class="basis-1/6 float-right font-normal">
                            {{ item.status }}
                        </span>
                        <span  class="basis-1/6 float-right font-normal">
                            <i class="pi pi-align-justify" style="color: slateblue"></i>
                            
                        </span>
                    </div>
                </template>
            </Panel>
        </template> 
    </Card>
</template>