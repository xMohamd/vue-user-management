<template>
  <UsersTable :usersList="users" />
</template>
<script>
import UsersTable from "@/components/UsersTable.vue";
import { useStore } from "vuex";
import { computed, onMounted, watch } from "vue";

export default {
  name: "UsersView",
  components: { UsersTable },
  setup() {
    let store = useStore();
    let users = computed(() => store.state.users);
    watch(users, (newUsers) => {
      if (newUsers !== users.value) {
        store.dispatch("fetchUsers");
      }
    });
    onMounted(() => {
      store.dispatch("fetchUsers");
    });
    const deleteUser = (id) => {
      store.dispatch("deleteUser", id);
    };
    return { users, deleteUser };
  }
};
</script>
