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
    <Panel v-for="item in requirements" v-bind:key="item.id"  collapsed :pt="{ root: { class: 'text-xs px-10 my-2'}, togglerIcon: { class: 'w-2'}, header: { class: 'rounded py-1' } }">
        <template #header>
            <div class="flex flex-row pt-2 w-full">
                <span  class="basis-5/6 font-bold">{{ item.requirement }}</span>
                <span  class="basis-1/6 float-right font-normal">
                    
                    {{ item.status }}
                </span>
            </div>
        </template>
    </Panel>

</template>