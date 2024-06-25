<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useSuperadminStore } from '../stores/SuperadminStore'
import SuperAdminLogin from '../components/Auth/Sudo/SuperAdminLogin.vue'
import SuperAdminRegister from '../components/Auth/Sudo/SuperAdminRegister.vue'


const router = useRouter()
const store = useSuperadminStore()
const items = ref([
    {
        label: 'Login',
        status: false
    },
    {
        label: 'Signup',
        status: true
    }
])

let makeswitch = reactive({status: false})

function navigate() {
  if(makeswitch.status === false) {
      makeswitch.status = items.value[1].status;
    }else{
      makeswitch.status = items.value[0].status;
    } 
}

if(store.superAdmin.id !== null) {
      router.push('sudo')
}

const home = () => {
  router.push('/')
}

</script>

<template>

  <Card :pt="{ root: { class: 'w-25 px-3 justify-content-center'}, }"> 
    <template #content>
      <SuperAdminLogin  v-if="makeswitch.status === false"/> 
      <SuperAdminRegister v-else /> 
      <TabMenu :model="items" @click="navigate" :pt="{
        menuitem: { class: 'text-xs py-0'},
        menu: { class: 'border-0 border-white'}
      }" />
    </template>
  </Card>
  <SpeedDial @click="home" showIcon="pi pi-home" direction="left" :style="{ top: 'calc(100% - 6rem)', right: 0, margin: '1rem' }" :pt="{ button: { class: 'w-5 h-5'} }" />
</template>
<style scoped>
</style>
