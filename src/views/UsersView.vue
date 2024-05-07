<template>
  <UsersTable :usersList="users" @deleteUser="updateUsers" />
</template>
<script>
import UserAPI from "@/services/UserAPI.js";

import UsersTable from "@/components/UsersTable.vue";
export default {
  name: "UsersView",
  components: { UsersTable },
  mixins: [UserAPI],
  methods: {
    async updateUsers() {
      await this.fetchUsers();
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>
