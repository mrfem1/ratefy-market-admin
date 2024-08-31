<script setup>
    const props = defineProps({
        peer: Object
    });
    
</script>
<template>
    
        <p>Peer To Peer</p>
        <small>
        acceptance's id :
        <small class="text-primary-500">
            {{ props.peer.Peer.acceptance_id }}
        </small>
        </small>
        <br />
        <small>
        amount :
        <small class="text-primary-500">
            
            {{ props.peer.Peer.amount }}
        </small>
        </small>

        <br />
        <small>
        amount to receive :
        <small class="text-primary-500">
            {{ props.peer.Peer.amount_to_receive }}
        </small>
        </small>
        <br />
        <small>
        duration :
        <small class="text-primary-500">
            {{ props.peer.Peer.duration }}
        </small>
        </small>
        <br />
        <small>
        duration_status :
        <small class="text-primary-500">
            {{ props.peer.Peer.duration_status }}
        </small>
        </small>
        <br />
        <small>
        end_time :
        <small class="text-primary-500">
            {{ props.peer.Peer.end_time }}
        </small>
        </small>
        <br />
        <small>
        id :
        <small class="text-primary-500">
            {{ props.peer.Peer.id }}
        </small>
        </small>
        <br />
        <small>
        item_for :
        <small class="text-primary-500">
            {{ props.peer.Peer.item_for }}
        </small>
        </small>
        <br />
        <small>
        item_id :
        <small class="text-primary-500">
            {{ props.peer.Peer.item_id }}
        </small>
        </small>
        <br />
        <small>
        item_name :
        <small class="text-primary-500">
            {{ props.peer.Peer.item_name }}
        </small>
        </small>
        <br />
        <small>
        owner :
        <small class="text-primary-500">
            {{ props.peer.Peer.owner }}
        </small>
        </small>
        <br />
        <small>
        owner_id :
        <small class="text-primary-500">
            {{ props.peer.Peer.owner_id }}
        </small>
        </small>
        <br />
        <small>
        payment_id :
        <small class="text-primary-500">
            {{ props.peer.Peer.payment_id }}
        </small>
        </small>
        <br />
        <small>
        payment_status :
        <small class="text-primary-500">
            {{ props.peer.Peer.payment_status }}
        </small>
        </small>
        <br />
        <small>
        proof_of_payment :
        <small class="text-primary-500">
            {{ props.peer.Peer.proof_of_payment }}
        </small>
        </small>
        <br />
        <small>
        proof_of_payment_status :
        <small class="text-primary-500">
            {{ props.peer.Peer.proof_of_payment_status }}
        </small>
        </small>
        <br />
        <small>
        recipient :
        <small class="text-primary-500">
            {{ props.peer.Peer.recipient }}
        </small>
        </small>
        <br />
        <small>
        recipient_id :
        <small class="text-primary-500">
            {{ props.peer.Peer.recipient_id }}
        </small>
        </small>
        <br />
        <small>
        reportage :
        <small class="text-primary-500">
            {{ props.peer.Peer.reportage }}
        </small>
        </small>
        <br />
        <small>
        session_id :
        <small class="text-primary-500">
            {{ props.peer.Peer.session_id }}
        </small>
        </small>
        <br />
        <small>
        session_status :
        <small class="text-primary-500">
            {{ props.peer.Peer.session_status }}
        </small>
        </small>
        <br />
        <small>
        start_time :
        <small class="text-primary-500">
            {{ props.peer.Peer.start_time }}
        </small>
        </small>
        <br />
        <small>
        updated_at :
        <small class="text-primary-500">
            {{ props.peer.Peer.updated_at }}
        </small>
        </small>
        <Divider></Divider>

        <small>
        <p>Trade Request</p>
        amount :
        <small class="text-primary-500">
            {{ props.peer.Order.updated_at }}
        </small>
        </small>
        <br />
        <small>
        duration :
        <small class="text-primary-500">
            {{ props.peer.Order.duration }}
        </small>
        </small>

        <br />
        <small>
        end :
        <small class="text-primary-500">
            {{ props.peer.Order.end }}
        </small>
        </small>
        <br />
        <small>
        id :
        <small class="text-primary-500">
            {{ props.peer.Order.id }}
        </small>
        </small>
        <small>
        item_for :
        <small class="text-primary-500">
            {{ props.peer.Order.item_for }}
        </small>
        </small>
        <br />
        <small>
        item_id :
        <small class="text-primary-500">
            {{ props.peer.Order.item_id }}
        </small>
        </small>
        <br />
        <small>
        notify_time :
        <small class="text-primary-500">
            {{ props.peer.Order.notify_time }}
        </small>
        </small>
        <br />
        <small>
        owner :
        <small class="text-primary-500">
            {{ props.peer.Order.owner }}
        </small>
        </small>
        <br />
        <small>
        recipient :
        <small class="text-primary-500">
            {{ props.peer.Order.recipient }}
        </small>
        </small>
        <br />
        <small>
        start :
        <small class="text-primary-500">
            {{ props.peer.Order.start }}
        </small>
        </small>
        <br />
        <small>
        status :
        <small class="text-primary-500">
            {{ props.peer.Order.status }}
        </small>
        </small>
        <br />
        <small>
        updated_at :
        <small class="text-primary-500">
            {{ props.peer.Order.updated_at }}
        </small>
        </small>
        <br />
        <small>
        wallet_id :
        <small class="text-primary-500">
            {{ props.peer.Order.wallet_id }}
        </small>
        </small>
        <br />
        <small>
        wallet_name :
        <small class="text-primary-500">
            {{ props.peer.Order.wallet_name }}
        </small>
        </small>
        <br />
        <small>
        created_at :
        <small class="text-primary-500">
            {{ props.peer.Order.created_at }}
        </small>
        </small>
        <br />

    
</template>