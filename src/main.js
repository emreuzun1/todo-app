import "./assets/main.css";

import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import TodoApp from "./components/TodoApp.vue";
import Calculator from "./components/Calculator.vue";

const routes = [
  { path: "/", component: App },
  { path: "/todo-app", component: TodoApp },
  { path: "/calculator", component: Calculator },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({});
app.use(router);

app.mount("#app");
