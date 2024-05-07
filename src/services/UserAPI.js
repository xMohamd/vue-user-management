import API from "./API";

export default {
  data() {
    return {
      users: [],
      user: {}
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await API().get("/users");
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUser(id) {
      try {
        const response = await API().get(`/users/${id}`);
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async createUser(user) {
      try {
        await API().post("/users", {
          id: (await this.getMaxId()) + 1,
          first_name: user.fname,
          last_name: user.lname,
          email: user.email,
          avatar: user.url
        });
      } catch (error) {
        console.error(error);
      }
    },
    async updateUserById(id, user) {
      try {
        await API().put(`/users/${id}`, user);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUserById(id) {
      try {
        await API().delete(`/users/${id}`);
        this.users = this.users.filter((user) => user.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
    async getMaxId() {
      try {
        const response = await API().get("/users");
        return response.data.length;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
