import "./assets/index.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import UsersView from "@/views/UsersView.vue";
import AddUserView from "@/views/AddUserView.vue";

import store from "./store/userStore";

import App from "./App.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/users", component: UsersView },
  { path: "/add", component: AddUserView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).use(store).mount("#app");
