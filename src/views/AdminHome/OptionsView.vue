<script setup>
 import Option from '../../components/StaffHome/Option.vue';
 import FetchOption from '../../components/StaffHome/FetchOption.vue';
</script>
<template>
    <Card :pt="{ root: { class:  'mx-1 text-xs my-2 py-0 mx-0 px-0 shadow-none bg-transparent' }, content: { class: 'my-1 mx-0 py-1 px-1'} }">
        <template #content>
            <Option  v-once />
            <FetchOption v-once />
        </template>
    </Card>
</template>