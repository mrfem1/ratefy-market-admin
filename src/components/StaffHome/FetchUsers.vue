<script setup>
    import { ref, computed } from 'vue';
    import axios from 'axios';
    import { useAdminStore } from '../../stores/AdminStore';
    import { useUsersStore } from '../../stores/UsersStore';
    import { useSingleUsersStore } from '../../stores/SingleUserStore';
    import { useRouter } from 'vue-router';
    import { onMounted } from 'vue';

    const auth = useAdminStore();
    const users = useUsersStore();
    const singleUser = useSingleUsersStore();
    const router = useRouter();

    const fetchUsers = async  () => {
        await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
        const response = await axios({
            url: 'https://staffbased.ratefy.co/api/get-users',
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + auth.admin.token},
        }).catch((error) => {
            console.log(error.resposne)
        });
  
        users.saveUsersList(JSON.parse(response.data.data));
        
    }

    

    const view = (data, uuid) => {

        singleUser.saveSingleUser(JSON.stringify(data));

        router.push({ name: 'singleuser', params: { uuid : uuid } })
    }
    
    
    const user = computed({
        
        get() {
            return Object.values(users.users.data)            
        }  
    })

    onMounted(() => {
        fetchUsers();
    });
</script>
<template>
    <DataTable v-if="user" :value="user"  dataKey="id"  :pt="{ tbody: { class: 'text-xs'},  thead: { class: 'text-xs'}, }">
        <Column field="email" header="email"></Column>
        <Column field="activity.ip_address" header="ip"></Column>
        <Column field="authorization.priviledge" header="priviledge"></Column>
        <Column field="authorization.type" header="type"></Column>
        <Column field="authorization.verified" header="verified"></Column>
        <Column  header="view">
            <template #body=" slotProps ">
                <Button icon="pi pi-clone" severity="success" label="view" @click="view(slotProps.data, slotProps.data.uuid)" :pt="{ label: { class: 'text-white text-[12px]'}, icon: { class: 'text-white text-[12px] mr-2' }, root: { class: 'bg-cyan-800 py-2 px-2'} }" />
            </template>
        </Column>
    </DataTable>
    <div v-else class="w-full xl:w-6/12 p-1">
        <Skeleton height="2rem"     width="20rem" class="mb-2"></Skeleton>
        <Skeleton height="2rem"     class="mb-2"></Skeleton>
        <Skeleton height="2rem"     class="mb-2"></Skeleton>
    </div>
</template>