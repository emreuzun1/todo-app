<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const route = ref("todo-app");
const error = ref("");
const loginState = reactive({ username: "", password: "" });
const login = () => {
  if (loginState.username.trim() === "" || loginState.password.trim() === "") {
    error.value = "You have to write something!";
    return;
  }
  router.push("/" + route.value);
};
</script>
<template>
  <main>
    <div style="display: flex; flex-direction: column">
      <label>Username</label>
      <input type="text" v-model="loginState.username" />
      <label>Password</label>
      <input type="text" v-model="loginState.password" />
      <div>
        <input type="radio" id="todo-app" value="todo-app" v-model="route" />
        <label for="todo-app">Todo App</label>
        <input
          type="radio"
          id="calculator"
          value="calculator"
          v-model="route"
        />
        <label for="calculator">Calculator</label>
      </div>
      <button @click="login">Login</button>
      <h4 v-if="error" style="color: red">{{ error }}</h4>
    </div>
  </main>
</template>
