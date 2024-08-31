<script setup>
    const props = defineProps({
       seller: Object 
    });

</script>
<template>
    <Divider></Divider>
    <p>Seller Detail</p>
    <br />
    <small>
    ip_address :
    <small class="text-primary-500">
        {{ props.seller.data.activity.ip_address }}
    </small>
    </small>
    <br />
    <small>
    status :
    <small class="text-primary-500">
        {{ props.seller.data.authorization.kyc.status }}
    </small>
    </small>
    <br />
    <small>
    priviledge :
    <small class="text-primary-500">
        {{ props.seller.data.authorization.priviledge }}
    </small>
    </small>
    <br />
    <small>
    email :
    <small class="text-primary-500">
        {{ props.seller.data.email }}
    </small>
    </small>
    <br />
    <small>
    firstname :
    <small class="text-primary-500">
        {{ props.seller.data.firstname }}
    </small>
    </small>
    <br />
    <small>
    lastname :
    <small class="text-primary-500">
        {{ props.seller.data.lastname }}
    </small>
    </small>
    <br />
    <small>
    phonenumber :
    <small class="text-primary-500">
        {{ props.seller.data.phonenumber }}
    </small>
    </small>
    <br />
    <small>
    username :
    <small class="text-primary-500">
        {{ props.seller.data.username }}
    </small>
    </small>

    <br />
    <small>
    uuid :
    <small class="text-primary-500">
        {{ props.seller.data.uuid }}
    </small>
    </small>
</template>