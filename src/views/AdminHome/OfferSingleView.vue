<script setup>
import axios from "axios";
import { uuid } from 'vue-uuid'; 
import { ref, onMounted, computed } from "vue";
import { useAdminStore } from '@/stores/AdminStore';
import { useRoute } from "vue-router";
import ChatComponent from '../../components/StaffHome/ChatComponent.vue';
import PeerToPeerComponent from '../../components/StaffHome/PeerToPeerComponent.vue';
import OfferComponent from '../../components/StaffHome/OfferComponent.vue'
import BuyerDetailComponent from '../../components/StaffHome/BuyerDetailComponent.vue'
import SellerDetailComponent from '../../components/StaffHome/SellerDetailComponent.vue'

const route = useRoute();
const auth = useAdminStore();
const details = ref(null);
const offers = ref(null);
const buyer = ref(null);
const seller = ref(null);
const message = ref('');


const getDetails = async () => {
  await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
  const response = await axios({
      method: 'POST',
      headers: {
          'Authorization': 'Bearer ' + auth.admin.token,
          'Content-Type': 'multipart/form-data'
      },
      url: 'https://staffbased.ratefy.co/api/get-full-order-details',
      data: {
          session:    route.params.session,

      }
  }).catch((error) => {  
    console.log(error.response);

  });

  details.value = JSON.parse(response.data.data);
  offers.value  = JSON.parse(details.value.Offer)
  buyer.value   = JSON.parse(details.value.Buyer);
  seller.value  = JSON.parse(details.value.Seller);

} 


const cancelTransaction = async  () => {
  await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
  const response = await axios({
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + auth.admin.token,
        'Content-Type': 'multipart/form-data'
    },
    url: 'https://staffbased.ratefy.co/api/cancel-transaction',
    data: {
        session:    route.params.session,

    }
  }).catch((error) => {
    console.log(error.response);
  });
}

const reinburseSeller = async  () => {
  await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
  const response = await axios({
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + auth.admin.token,
        'Content-Type': 'multipart/form-data'
    },
    url: 'https://staffbased.ratefy.co/api/reinburse-seller',
    data: {
        session:    route.params.session,

    }
  }).catch((error) => {
    console.log(error.response);
  });
}

const completeTransaction = async () => {
  await axios.get('https://staffbased.ratefy.co/sanctum/csrf-cookie');
  const response = await axios({
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + auth.admin.token,
        'Content-Type': 'multipart/form-data'
    },
    url: 'https://staffbased.ratefy.co/api/complete-transaction',
    data: {
        session:    route.params.session,

    }
  }).catch((error) => {
    console.log(error.response);
  });
}

const sendMessage = () => {  
  axios.post(`https://transactionbased.ratefy.co/api/send-chat`, {
        session: route.params.session, 
        acceptance: route.params.acceptance,
        sender: auth.admin.email,
        receiver: auth.admin.email,
        message: message.value,
        contentType: "text"
      })
  message.value = '';
}

onMounted(() => {
  getDetails();
})

</script>

<template>
    
    <div class="my-5 flex flex-row">
    <div
      class="w-full md:w-5 flex basis-4/12 align-items-center justify-content-center gap-3 py-5"
    >
     <div class="w-full">
      <div v-if="details" class="py-2">

        <Card :pt="{ title: { class: 'text-[20px] my-2' }, root: { class: 'bg-slate-100' }, body: { class: 'px-2 py-2 h-96'}, content: { class: 'py-1 pb-5 overflow-y-scroll'} }">
            <template #content>
                <ChatComponent  :session="route.params.session" :acceptance="route.params.acceptance" :buyer="buyer.data.uuid" :seller="seller.data.uuid" />
            </template>
        </Card>

      </div>
      <div class="py-2">
        <form @submit.prevent="sendMessage()">
          <InputGroup :pt="{ root: { class: 'h-8 bg-white text-gray'}}">
              <InputText placeholder="Message" v-model="message" :pt="{ root: { class: 'bg-white text-gray border-color: transparent px-2'}}" />
              <Button icon="pi pi-send" severity="warn" type="submit" />
          </InputGroup>
        </form>
        
      </div>
      <div class="py-2">
        <Button
              label="Cancel"
              severity="secondary"
              :pt="{
                label: { class: 'text-white text-[12px]' },
                icon: { class: 'text-white text-[12px] mr-2' },
                root: { class: 'bg-cyan-800 py-2 px-2 mx-2' },
              }"
              @click="cancelTransaction()"
            />
            <Button
              label="Complete"
              severity="success"
              :pt="{
                label: { class: 'text-white text-[12px]' },
                icon: { class: 'text-white text-[12px] mr-2' },
                root: { class: 'bg-cyan-800 py-2 px-2 mx-2' },
              }"
               @click="completeTransaction()"
            />
            <Button
              label="Reinburse"
              severity="info"
              :pt="{
                label: { class: 'text-white text-[12px]' },
                icon: { class: 'text-white text-[12px] mr-2' },
                root: { class: 'bg-cyan-800 py-2 px-2 mx-2' },
              }"
               @click="reinburseSeller()"
            />
      </div>
      
      
      
     </div>
      
    </div>
    <div class="w-full md:w-2 basis-1/12 bg-transparent">
      <Divider
        layout="vertical"
        class="hidden md:flex"
        :pt="{
          content: { class: 'bg-white px-3 py-3 border border-1 rounded' },
        }"
        ><i class="pi pi-send" style="color: 'var(--primary-color)'"></i
      ></Divider>
    </div>

    <div class="w-full md:w-5 basis-6/12 align-items-center justify-content-center py-5">
      <Card v-if="details" :pt="{ root: { class: 'bg-white' } }">
        <template #content>
          <div class="w-full flex flex-row">
            <div class="basis-6/12 px-3">
              <PeerToPeerComponent v-once :peer="details" />
            </div>
            <div class="basis-6/12 px-3">
              <OfferComponent v-once :offers="offers"/>
              <BuyerDetailComponent v-once :buyer="buyer" />
              <SellerDetailComponent v-once :seller="seller" />
            </div>
          </div>
        </template>
      </Card>
      <div v-else class="w-full xl:w-6/12 p-4">
          <Skeleton height="2rem" class="mb-2"></Skeleton>
          <Skeleton height="2rem" width="33rem" class="mb-2"></Skeleton>
          <Skeleton height="2rem" width="10rem" class="mb-2"></Skeleton>
      </div>
    </div>
  </div>
</template>