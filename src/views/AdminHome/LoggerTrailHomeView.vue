<script setup>

import { ref } from 'vue';
    import { useAdminStore } from '../../stores/AdminStore';
    import { useRoute } from 'vue-router';
    import axios from 'axios';


    const route = useRoute();
    const auth = useAdminStore();
    const trackList = ref();
    const tracks = ref();


    const fetchTrack = async () => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({   
            method: 'GET',
            url: 'https://staffbased.ratefy.co/api/logtrail',
            headers: {
                'Authorization': 'Bearer ' + auth.admin.token
            },
            
        }).catch((error) => {  
            console.log(error.response)
        }); 

        trackList.value =   response.data;
        tracks.value = trackList.value;
    }

    fetchTrack();
</script>
<template>
    <Card :pt="{root: { class: 'mx-1 text-xs my-2 py-0 mx-0 px-0 shadow-none bg-transparent' }, content: { class: 'my-1 mx-0 py-1 px-1'}  }">
        <template #content>
        <DataTable :value="tracks"  tableStyle="min-width: 50rem">
            <Column field="action" header="Action"></Column>
            <Column field="content" header="Error"></Column>
            <Column field="trace_id" header="Trace Id"></Column>
            <Column field="created_at" header="Time"></Column>
        </DataTable>
        </template>
    </Card>
</template>