<template>
  <div class="flex justify-center mt-6">
    <div class="overflow-x-auto">
      <table class="table w-auto bg-[#233141]">
        <thead class="text-white">
          <tr>
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Age</th>
            <th class="px-4 py-2">Role</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody class="font-bold">
          <tr class="hover" v-for="person in admins" :key="person.id">
            <td class="px-4 py-2">{{ person.id }}</td>
            <td class="px-4 py-2">{{ person.name }}</td>
            <td class="px-4 py-2">{{ person.age }}</td>
            <td class="px-4 py-2">{{ person.role }}</td>
            <td>
              <div class="flex gap-2 justify-center items-center">
                <button class="btn btn-error btn-sm" @click="deleteAdmin(person.id)">Delete</button>
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
export default {
  name: "AdminTable",
  props: ["admins"],
  methods: {
    deleteAdmin(id) {
      const newAdmins = this.admins.filter((admin) => admin.id !== id);
      this.$emit("deleteAdmin", newAdmins);
    }
  }
};
</script>
