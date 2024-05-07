<template>
  <div class="flex flex-col justify-center gap-9">
    <div class="flex justify-center items-center flex-col gap-3">
      <h2 class="text-2xl font-bold">Add New User Form</h2>
      <div class="border border-gray-300 rounded-lg p-6">
        <form class="space-y-4" @submit.prevent="submitForm">
          <div>
            <label for="fname" class="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              class="input input-bordered input-primary w-full max-w-xs"
              v-model.trim="formValue.fname"
              autocomplete="on"
              required
            />
          </div>
          <div>
            <label for="lname" class="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              class="input input-bordered input-primary w-full max-w-xs"
              v-model.number="formValue.lname"
              autocomplete="on"
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="john@me.com"
              class="input input-bordered input-primary w-full max-w-xs"
              v-model.number="formValue.email"
              autocomplete="on"
              required
            />
          </div>
          <div>
            <label for="avatar" class="block mb-2 text-sm font-medium">Avatar URL</label>
            <input
              type="url"
              id="avatar"
              value="https://placehold.co/50"
              class="input input-bordered input-primary w-full max-w-xs"
              v-model.number="formValue.url"
              autocomplete="on"
              required
            />
          </div>
          <button type="submit" class="block btn btn-accent mt-5 mx-auto" :disabled="!isFormValid">
            Add
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import UserAPI from "@/services/UserAPI.js";
export default {
  name: "UserForm",
  mixins: [UserAPI],
  data() {
    return {
      formValue: {
        fname: "",
        lname: "",
        email: "",
        url: "https://placehold.co/50"
      }
    };
  },
  computed: {
    isFormValid() {
      return (
        this.formValue.fname && this.formValue.lname && this.formValue.email && this.formValue.url
      );
    }
  },
  methods: {
    submitForm() {
      const { fname, lname, email, url } = this.formValue;
      Object.assign(this.formValue, {
        fname: "",
        lname: "",
        email: "",
        url: "https://placehold.co/50"
      });
      this.createUser({ fname, lname, email, url });
    }
  }
};
</script>
