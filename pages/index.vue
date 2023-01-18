<template>
  <div class="counter">
    <form @submit.prevent="submitForm" id="ng-fm" class="ng-fm">
      <div class="ng-fm-row">
        <input
          type="text"
          v-model="formData.fullName"
          class="ng-inp"
          placeholder="Full Name"
        />
      </div>
      <div class="ng-fm-row">
        <input
          type="text"
          v-model="formData.email"
          class="ng-inp"
          placeholder="Email"
        />
      </div>
      <div class="ng-fm-row">
        <input
          type="number"
          v-model="formData.phoneNo"
          class="ng-inp"
          placeholder="Phone Number"
        />
      </div>
      <div class="ng-fm-row">
        <input
          type="text"
          v-model="formData.service"
          class="ng-inp"
          placeholder="Service"
        />
      </div>
      <div class="ng-fm-row">
        <textarea
          name=""
          v-model="formData.message"
          class="ng-inp"
          placeholder="Message"
        ></textarea>
      </div>
      <div class="ng-fm-row">
        <button class="ng-bt-pri" type="submit" @click="submit">
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { formValid } from "../schema/form";

const formData = reactive({
  fullName: "John",
  email: "Doe",
  message: "Hello",
  phoneNo: "",
  service: "",
});
function submit() {
  const { success } = formValid.safeParse(formData);
  console.log(success);
}
</script>
