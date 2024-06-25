<script setup>
    import { useSuperadminStore } from '../../stores/SuperadminStore'
    import ListUser from '../../components/SudoHome/ListUsers.vue'

    const store = useSuperadminStore()

    if(store.superAdmin.id === null) {
        router.push('home')
    }
</script>
<template>
    <Card :pt="{ root: { class:  'bg-transparent border-0 shadow-none w-full px-0' },  content: { class: 'text-xs'} }">
        <template #content>
            <div class="flex flex-row">
                <Card :pt="{ root: { class: 'w-1/5 mx-1 py-1 px-1' }, content: { class: 'text-xs my-1 py-1 px-1 mx-1'}, title: { class: 'text-sm my-1 py-1 mx-1 px-1'} }">
                    <template #title>
                        <span>{{ store.superAdmin.alias }}</span>
                    </template>
                    <template #content>
                        <span> {{ store.superAdmin.superStatus }}</span>
                    </template>
                </Card>
                <Card :pt="{ root: { class:  'w-5/6 mx-0' }, content: { class: 'text-xs'} }">
                    <template #content>
                        <p class="font-medium"> Welcome {{ store.superAdmin.name }}</p>
                        <p  class="font-light"> Email: {{ store.superAdmin.email }}</p>
                        <p class="font-light">Mobile: {{ store.superAdmin.mobile }}</p>
                    </template>
                </Card>
            </div>
            
        </template>
    </Card>
    <ListUser />
</template>