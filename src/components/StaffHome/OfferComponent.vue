<script setup>
    const props = defineProps({ offers: Object});
</script>
<template>
    <p>Offer</p>
    <small>
    Uuid :
    <small class="text-primary-500">
        {{ props.offers.data.uuid }}
        
    </small>
    </small>
    <br />
    <small>
    duration :
    <small class="text-primary-500">
        {{ props.offers.data.duration }}
    </small>
    </small>

    <br />
    <small>
    ewallet_id :
    <small class="text-primary-500">
        {{ props.offers.data.ewallet_id }}
    </small>
    </small>
    <br />
    <small>
    fixed_rate :
    <small class="text-primary-500">
        {{ props.offers.data.fixed_rate }}
    </small>
    </small>
    <br />
    <small>
    guide :
    <small class="text-primary-500">
        {{ props.offers.data.guide }}
    </small>
    </small>
    <br />
    <small>
    id :
    <small class="text-primary-500">
        {{ props.offers.data.id }}
    </small>
    </small>
    <br />
    <small>
    max_amount :
    <small class="text-primary-500">
        {{ props.offers.data.max_amount }}
    </small>
    </small>
    <br />
    <small>
    min_amount :
    <small class="text-primary-500">
        {{ props.offers.data.min_amount }}
    </small>
    </small>
    <br />
    <small>
    payment_option_id :
    <small class="text-primary-500">
        {{ props.offers.data.payment_option_id }}
    </small>
    </small>
    <br />
    <small>
    percentage :
    <small class="text-primary-500">
        {{ props.offers.data.percentage }}
    </small>
    </small>
    <br />
    <small>
    status :
    <small class="text-primary-500">
        {{ props.offers.data.status }}
    </small>
    </small>
    <br />
    <small>
    updated_at :
    <small class="text-primary-500">
        {{ props.offers.data.updated_at }}
    </small>
    </small>
    <br />
    <small>
    
    <div class="w-full px-4">
        <Divider></Divider>
        <p>Payment Options</p>
        
        <small>
        ewallet_id :
        <small class="text-primary-500">
            {{ props.offers.data.paymentoption.ewallet_id }}
        </small>
        </small>
        <br />
        <small>
        id :
        <small class="text-primary-500">
            {{ props.offers.data.paymentoption.id }}
        </small>
        </small>
        <br />
        <small>
        option :
        <small class="text-primary-500">
            {{ props.offers.data.paymentoption.option }}
        </small>
        </small>
        <br />
        <small>
        status :
        <small class="text-primary-500">
            {{ props.offers.data.paymentoption.status }}
        </small>
        </small>
        <br />
        <small>
        updated_at :
        <small class="text-primary-500">
            {{ props.offers.data.paymentoption.updated_at }}
        </small>
        </small>
        <br />
        <small>
        created_at :
        <small class="text-primary-500">
            {{ props.offers.data.paymentoption.created_at }}
        </small>
        </small>
        <br />
    </div>
    </small>
    <br />
</template>