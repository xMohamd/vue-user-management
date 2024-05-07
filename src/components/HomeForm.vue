<template>
  <div class="flex flex-col justify-center gap-9">
    <div class="flex justify-center items-center flex-col gap-3">
      <h2 class="text-2xl font-bold">Admin Form</h2>
      <div class="border border-gray-300 rounded-lg p-6">
        <form @submit.prevent="submitForm">
          <div class="flex gap-5">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                class="input input-bordered input-primary w-full max-w-xs"
                v-model.trim="formValue.name"
                autocomplete="on"
                required
              />
            </div>
            <div>
              <label for="age" class="block mb-2 text-sm font-medium">Age</label>
              <input
                type="number"
                id="age"
                placeholder="Your age"
                class="input input-bordered input-primary w-full max-w-xs"
                v-model.number="formValue.age"
                min="18"
                max="100"
                autocomplete="on"
                required
              />
            </div>
          </div>
          <div class="flex mt-4 items-center flex-col gap-3">
            <label for="role" class="block mb-2 text-sm font-medium">Role</label>
            <select
              class="select select-primary max-w-xs"
              id="role"
              v-model="formValue.role"
              required
            >
              <option disabled value="">Select your role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
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
export default {
  name: "HomeForm",
  data() {
    return {
      id: 1,
      formValue: {
        name: "",
        age: null,
        role: ""
      }
    };
  },
  computed: {
    isFormValid() {
      return (
        this.formValue.name &&
        this.formValue.age > 18 &&
        this.formValue.age < 100 &&
        this.formValue.role
      );
    }
  },
  methods: {
    submitForm() {
      const { name, age, role } = this.formValue;
      Object.assign(this.formValue, { name: "", age: null, role: "" });
      this.$emit("people", { id: this.id++, name, age, role });
    }
  }
};
</script>
