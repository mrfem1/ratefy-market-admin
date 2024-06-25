<script setup>
import axios from 'axios';
import { useSuperadminStore } from '../../stores/SuperadminStore';
import { useStaffStore } from '../../stores/StaffStore';
import { computed } from 'vue'
const store = useSuperadminStore()
const staffer = useStaffStore()

const getUsers = async () => {
    await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
    const response = await axios({
        method: 'GET',
        headers: {'Authorization': 'Bearer '+store.superAdmin.token},
        url: 'https://staffbased.ratefy.co/api/fetch-admin',
    }).catch(function(error) {
        console.log(error.response)
    });
    staffer.saveUsersList(response.data.data)
}
getUsers()
const staffs = computed({
    get() {
        return Object.values(staffer.staff)
    }
})

</script>
<template>
    <Card :pt="{ root: { class:  'mx-5' }, content: { class: 'text-xs'} }">
        <template #content>
            <p class="font-semibold">List of staffers</p>
            <div class="card">
                <DataTable :value="staffs" v-if="staffs !== null" tableStyle="min-width: 40rem"  :pt="{ table: { style: { fontSize: '12px' } } }">
                    <Column field="name" header="Name"></Column>
                    <Column field="authority" header="Authority"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="super" header="Categoty"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
            
        </template>
    </Card>
</template>
<style scoped>

</style>