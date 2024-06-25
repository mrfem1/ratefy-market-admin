<script setup>
    import WalletList from '../../components/StaffHome/WalletList.vue';
</script>
<template>
    <Card :pt="{ root: { class:  'mx-1 text-xs my-2 py-0 mx-0 px-0 shadow-none' }, content: { class: 'my-1 mx-1 py-1 px-1'} }">
        <template #content>
            <WalletList />
        </template>
    </Card>
    
</template>