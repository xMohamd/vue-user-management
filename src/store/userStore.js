/* eslint-disable no-unused-vars */
import { createStore } from "vuex";
import axios from "axios";

const baseURL = "http://localhost:3000";

const store = createStore({
  state() {
    return {
      users: [],
      user: {}
    };
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(`${baseURL}/users`);
        console.log("Fetch user", response);
        commit("setUsers", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUser({ commit }, id) {
      try {
        const response = await axios.get(`${baseURL}/users/${id}`);
        commit("setUser", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createUser({ commit }, user) {
      try {
        await axios.post(`${baseURL}/users`, {
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

    async updateUserById({ commit }, id, user) {
      try {
        await axios.put(`${baseURL}/users/${id}`, user);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUserById({ commit }, id) {
      try {
        await axios.delete(`${baseURL}/users/${id}`);
        this.users = this.users.filter((user) => user.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
    async getMaxId({ commit }) {
      try {
        const response = await axios.get(`${baseURL}/users`);
        return response.data.length;
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {}
});

export default store;
