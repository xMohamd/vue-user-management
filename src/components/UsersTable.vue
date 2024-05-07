<template>
  <div class="flex justify-center mt-6">
    <div class="overflow-x-auto">
      <table class="table w-auto bg-[#233141]">
        <thead class="text-white">
          <tr>
            <th class="px-4 py-2 text-center">Id</th>
            <th class="px-4 py-2 text-center">Avatar</th>
            <th class="px-4 py-2 text-center">First Name</th>
            <th class="px-4 py-2 text-center">Last Name</th>
            <th class="px-4 py-2 text-center">Email</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody class="font-bold">
          <tr class="hover" v-for="person in usersList" :key="person.id">
            <td class="px-4 py-2 text-center">{{ person.id }}</td>
            <td class="px-4 py-2 text-center">
              <div class="mask mask-squircle w-12 h-12">
                <img :src="person.avatar" alt="User Avatar" />
              </div>
            </td>
            <td class="px-4 py-2 text-center">{{ person.first_name }}</td>
            <td class="px-4 py-2 text-center">{{ person.last_name }}</td>
            <td class="px-4 py-2 text-center">{{ person.email }}</td>
            <td>
              <div class="flex gap-2 justify-center items-center">
                <button class="btn btn-error btn-sm" @click="deleteUser(person.id)">Delete</button>
                <!-- TODO: Implement functionality of edit button -->
                <!-- <button class="btn btn-primary btn-sm">Edit</button> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import UserAPI from "@/services/UserAPI.js";

export default {
  name: "UsersTable",
  props: ["usersList"],
  mixins: [UserAPI],
  methods: {
    async deleteUser(id) {
      this.deleteUserById(id);
      this.$emit("deleteUser");
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>
