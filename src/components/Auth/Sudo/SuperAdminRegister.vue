<script setup>
import { ref } from 'vue'
const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};


const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const confirmpassword = ref('');
</script>
<template>

    <p class="text-sm font-bold mb-3">Register</p>
    <span class="p-float-label text-sm">
        <InputText id="firstname" v-model="firstname" :pt="{ root: { class: 'py-2 w-52 text-xs border-2 border-stone-600' } }"/>
        <label for="firstname">Firstname</label>
    </span>
    <Divider :pt="{ root: {class: 'border-0 my-3'} }" />
    <span class="p-float-label text-sm">
        <InputText id="lastname" v-model="lastname" :pt="{ root: { class: 'py-2 w-52 text-xs border-2 border-stone-600' } }" />
        <label for="lastname">Lastname</label>
    </span>
    <Divider :pt="{ root: {class: 'border-0 my-3'} }" />
    <span class="p-float-label text-sm">
        <InputText id="email" v-model="email" :pt="{ root: { class: 'py-2 w-52 text-xs border-2 border-stone-600' } }" />
        <label for="Email">Email</label>
    </span>
    <Divider :pt="{ root: {class: 'border-0 my-3'} }" />
    <span class="p-float-label text-sm">
        
        <Password v-model="password" toggleMask :pt="{ root: { class: 'py-1 h-12 text-xs' }, info: { class: 'text-xs' }, }" />
        <label for="password">Password</label>
    </span>
    <Divider :pt="{ root: {class: 'border-0 my-3'} }" />
    <span class="p-float-label  text-sm">
        <Password v-model="confirmpassword" :pt="{ root: { class: 'py-1 h-12 text-xs' }, info: { class: 'text-xs' }, }" />
        <label for="confirmpassword">Confirm password</label>
    </span>
    <Divider :pt="{ root: {class: 'border-0 my-3'} }" />
    <Button type="button" label="Register" :loading="loading" @click="load"  :pt="{ root: { class: 'px-3 bg-black py-2 text-white w-52'} }" />

</template>
<style scoped>
.mb-3 {
    margin-bottom: 25px;
}
</style>