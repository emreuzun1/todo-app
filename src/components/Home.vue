<template>
  <div>
    <div>
      <button @click="isTodo = true">Todo App</button>
      <button @click="isTodo = false">Calculator</button>
    </div>
    <TodoApp v-if="isTodo" />
    <Calculator v-else />
  </div>
</template>

<script setup>
import TodoApp from "./TodoApp.vue";
import Calculator from "./Calculator.vue";
import { ref } from "vue";

const isTodo = ref(true);
</script>

<style></style>
