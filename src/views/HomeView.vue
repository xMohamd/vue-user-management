<template>
  <HomeForm @people="filtersPeople" />
  <div class="flex justify-center items-center pt-8 gap-6">
    <button class="btn" @click="showTable('admin')">Admin</button>
    <button class="btn btn-neutral" @click="showTable('user')">Users</button>
  </div>
  <component
    :is="currentComponent"
    :admins="admins"
    :users="users"
    @deleteUser="updateUsers"
    @deleteAdmin="updateAdmins"
  />
</template>
<script>
import HomeForm from "@/components/HomeForm.vue";
import AdminTable from "@/components/AdminTable.vue";
import UserTable from "@/components/UserTable.vue";

export default {
  name: "HomeView",
  data() {
    return {
      flag: "",
      admins: [],
      users: []
    };
  },
  components: {
    HomeForm,
    AdminTable,
    UserTable
  },
  computed: {
    currentComponent() {
      if (this.flag === "admin") {
        return AdminTable;
      } else if (this.flag === "user") {
        return UserTable;
      } else {
        return null;
      }
    }
  },
  methods: {
    showTable(role) {
      this.flag = role;
    },
    filtersPeople(person) {
      if (person.role === "admin") {
        this.admins.push(person);
      } else {
        this.users.push(person);
      }
    },
    updateUsers(newUsers) {
      this.users = newUsers;
    },
    updateAdmins(newAdmins) {
      this.admins = newAdmins;
    }
  }
};
</script>
