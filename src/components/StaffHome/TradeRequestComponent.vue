<script setup>
    const props = defineProps({
       payment: Object 
    });
</script>
<template>
    <div class="basis-6/12 px-3">
        <Divider></Divider>
        <p>Buyer Detail</p>
        <br />
        <small>
        ip_address :
        <small class="text-primary-500">
            {{ buyer.data.activity.ip_address }}
        </small>
        </small>
        <br />
        <small>
        status :
        <small class="text-primary-500">
            {{ buyer.data.authorization.kyc.status }}
        </small>
        </small>
        <br />
        <small>
        priviledge :
        <small class="text-primary-500">
            {{ buyer.data.authorization.priviledge }}
        </small>
        </small>
        <br />
        <small>
        email :
        <small class="text-primary-500">
            {{ buyer.data.email }}
        </small>
        </small>
        <br />
        <small>
        firstname :
        <small class="text-primary-500">
            {{ buyer.data.firstname }}
        </small>
        </small>
        <br />
        <small>
        lastname :
        <small class="text-primary-500">
            {{ buyer.data.lastname }}
        </small>
        </small>
        <br />
        <small>
        phonenumber :
        <small class="text-primary-500">
            {{ buyer.data.phonenumber }}
        </small>
        </small>
        <br />
        <small>
        username :
        <small class="text-primary-500">
            {{ buyer.data.username }}
        </small>
        </small>

        <br />
        <small>
        uuid :
        <small class="text-primary-500">
            {{ buyer.data.uuid }}
        </small>
        </small>

        <Divider></Divider>
        <p>Seller Detail</p>
        <br />
        <small>
        ip_address :
        <small class="text-primary-500">
            {{ seller.data.activity.ip_address }}
        </small>
        </small>
        <br />
        <small>
        status :
        <small class="text-primary-500">
            {{ seller.data.authorization.kyc.status }}
        </small>
        </small>
        <br />
        <small>
        priviledge :
        <small class="text-primary-500">
            {{ seller.data.authorization.priviledge }}
        </small>
        </small>
        <br />
        <small>
        email :
        <small class="text-primary-500">
            {{ seller.data.email }}
        </small>
        </small>
        <br />
        <small>
        firstname :
        <small class="text-primary-500">
            {{ seller.data.firstname }}
        </small>
        </small>
        <br />
        <small>
        lastname :
        <small class="text-primary-500">
            {{ seller.data.lastname }}
        </small>
        </small>
        <br />
        <small>
        phonenumber :
        <small class="text-primary-500">
            {{ seller.data.phonenumber }}
        </small>
        </small>
        <br />
        <small>
        username :
        <small class="text-primary-500">
            {{ seller.data.username }}
        </small>
        </small>

        <br />
        <small>
        uuid :
        <small class="text-primary-500">
            {{ seller.data.uuid }}
        </small>
        </small>
    </div>
</template>