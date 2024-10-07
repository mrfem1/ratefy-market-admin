<script setup>
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useSingleUsersStore } from "../../stores/SingleUserStore";
import { ref, computed } from "vue";

const route = useRoute();
const singleUser = useSingleUsersStore();
const router = useRouter();
console.log(route.params.uuid);
const singleGate = ref("");
singleGate.value = JSON.parse(singleUser.singleuser);

if (singleGate.value.uuid !== route.params.uuid) {
  router.push("/listofusers");
}

console.log(singleGate.value);


const loading = ref(false);

const load = (uuid) => {
    loading.value = true;
    router.push("/trail/"+uuid);
    // setTimeout(() => {
    //     loading.value = false;
    // }, 2000);
  }
</script>
<template>
  <div class="my-5 flex flex-row">
    <div
      class="w-full md:w-5 flex basis-4/12 align-items-center justify-content-center gap-3 py-5"
    >
      <Card
        :pt="{
          title: { class: 'text-[20px] my-2 py-1' },
          root: { class: 'bg-white' },
        }"
      >
        <template #title
          ><i class="pi pi-user"></i> : {{ singleGate.firstname }}
          {{ singleGate.lastname }}</template
        >
        <template #content>
          <span> <i class="pi pi-envelope"></i> : {{ singleGate.email }} </span>
          <br />
          <span>
            <i class="pi pi-phone"></i> : {{ singleGate.phonenumber }}
          </span>
          <br />
          <span>
            <i class="pi pi-circle"></i> : {{ singleGate.username }}
          </span>
          <br />
          <span>
            <i class="pi pi-globe"></i> : {{ singleGate.activity.ip_address }}
          </span>
          <br />
          <span>
            <i class="pi pi-database"></i> :
            <small> {{ singleGate.uuid }} </small>
          </span>

          <Divider></Divider>

          <Button
            label="Activate"
            severity="secondary"
            :pt="{
              label: { class: 'text-white text-[12px]' },
              icon: { class: 'text-white text-[12px] mr-2' },
              root: { class: 'bg-cyan-800 py-2 px-2 mx-2' },
            }"
          />
          <Button
            label="Block"
            severity="success"
            :pt="{
              label: { class: 'text-white text-[12px]' },
              icon: { class: 'text-white text-[12px] mr-2' },
              root: { class: 'bg-cyan-800 py-2 px-2 mx-2' },
            }"
          />
          <Button
            label="Verify"
            severity="info"
            :pt="{
              label: { class: 'text-white text-[12px]' },
              icon: { class: 'text-white text-[12px] mr-2' },
              root: { class: 'bg-cyan-800 py-2 px-2 mx-2' },
            }"
          />
        </template>
      </Card>
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
    <div
      class="w-full md:w-5 basis-7/12 align-items-center justify-content-center py-5"
    >
      <Card :pt="{ root: { class: 'bg-white' } }">
        <template #title>Detail  <Button type="button" label="Track" icon="pi pi-search" :loading="loading" @click="load(singleGate.uuid)" class="float-right" :pt="{ root: { class: 'h-8 bg-green-500 px-5'}}" /></template>
        <template #content>
          <div class="w-full flex flex-row">
            <div class="basis-6/12 px-3">
              <small>
                author's id :
                <small class="text-primary-500">
                  {{ singleGate.activity.author_id }}
                </small>
              </small>
              <br />
              <small>
                created at :
                <small class="text-primary-500">
                  {{
                    new Date(singleGate.activity.created_at).toLocaleString()
                  }}
                </small>
              </small>

              <br />
              <small>
                last login :
                <small class="text-primary-500">
                  {{
                    new Date(singleGate.activity.last_login).toLocaleString()
                  }}
                </small>
              </small>
              <br />
              <small>
                updated at :
                <small class="text-primary-500">
                  {{
                    new Date(singleGate.activity.updated_at).toLocaleString()
                  }}
                </small>
              </small>
              <br />

              <Divider></Divider>

              <small>
                Priviledge :
                <small class="text-primary-500">
                  {{ singleGate.authorization.priviledge }}
                </small>
              </small>
              <br />
              <small>
                Type :
                <small class="text-primary-500">
                  {{ singleGate.authorization.type }}
                </small>
              </small>

              <br />
              <small>
                Verified :
                <small class="text-primary-500">
                  {{ singleGate.authorization.verified }}
                </small>
              </small>
              <br />
              <small>
                Wallet :
                <small class="text-primary-500">
                  {{ singleGate.authorization.wallet }}
                </small>
              </small>
            </div>
            <div class="basis-6/12 px-3">
              <small>
                Alias :
                <small class="text-primary-500">
                  {{ singleGate.tag.alias }}
                </small>
              </small>
              <br />
              <small>
                Avatar Color :
                <small class="text-primary-500">
                  {{ singleGate.tag.avatar_color }}
                </small>
              </small>

              <Divider></Divider>

              <small>
                Avatar Image :
                <small class="text-primary-500">
                  {{ singleGate.tag.avatar_image }}
                </small>
              </small>
              <br />
              <small>
                Avatar Name :
                <small class="text-primary-500">
                  {{ singleGate.tag.avatar_name }}
                </small>
              </small>

              <br />
              <small>
                Pen Name :
                <small class="text-primary-500">
                  {{ singleGate.tag.pen_name }}
                </small>
              </small>
              <br />
              <small>
                Username :
                <small class="text-primary-500">
                  {{ singleGate.tag.username }}
                </small>
              </small>

              <br />
              <br />
              <small>
                device :
                <small class="text-primary-500">
                  {{ singleGate.activity.device }}
                </small>
              </small>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
