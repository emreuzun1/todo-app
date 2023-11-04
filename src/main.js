import "./assets/main.css";

import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";

const routes = [
  { path: "/", component: App },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({});
app.use(router);

app.mount("#app");
