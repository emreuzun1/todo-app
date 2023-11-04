<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const error = ref("");
const loginState = reactive({ username: "", password: "" });
const login = () => {
  if (loginState.username.trim() === "" || loginState.password.trim() === "") {
    error.value = "You have to write something!";
    return;
  }
  router.push("/home");
};
</script>
<template>
  <main>
    <div style="display: flex; flex-direction: column">
      <label>Username</label>
      <input type="text" v-model="loginState.username" />
      <label>Password</label>
      <input type="text" v-model="loginState.password" />
      <button @click="login">Login</button>
      <h4 v-if="error" style="color: red">{{ error }}</h4>
    </div>
  </main>
</template>
