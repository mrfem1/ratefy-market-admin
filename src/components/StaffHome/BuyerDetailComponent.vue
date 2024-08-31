<script setup>
    const props = defineProps({
       buyer: Object 
    });
</script>
<template>
    <Divider></Divider>
    <p>Buyer Detail</p>
    <br />
    <small>
    ip_address :
    <small class="text-primary-500">
        {{ props.buyer.data.activity.ip_address }}
    </small>
    </small>
    <br />
    <small>
    status :
    <small class="text-primary-500">
        {{ props.buyer.data.authorization.kyc.status }}
    </small>
    </small>
    <br />
    <small>
    priviledge :
    <small class="text-primary-500">
        {{ props.buyer.data.authorization.priviledge }}
    </small>
    </small>
    <br />
    <small>
    email :
    <small class="text-primary-500">
        {{ props.buyer.data.email }}
    </small>
    </small>
    <br />
    <small>
    firstname :
    <small class="text-primary-500">
        {{ props.buyer.data.firstname }}
    </small>
    </small>
    <br />
    <small>
    lastname :
    <small class="text-primary-500">
        {{ props.buyer.data.lastname }}
    </small>
    </small>
    <br />
    <small>
    phonenumber :
    <small class="text-primary-500">
        {{ props.buyer.data.phonenumber }}
    </small>
    </small>
    <br />
    <small>
    username :
    <small class="text-primary-500">
        {{ props.buyer.data.username }}
    </small>
    </small>

    <br />
    <small>
    uuid :
    <small class="text-primary-500">
        {{ props.buyer.data.uuid }}
    </small>
    </small>        
</template>