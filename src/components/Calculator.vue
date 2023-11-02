<script setup>
import { ref } from "vue";
const operators = ["x", "/", "+", "-"];
const input = ref();
const output = ref(0);

const calculate = (_operator) => {
  if (_operator === "x") {
    output.value *= input.value;
  } else if (_operator === "/") {
    output.value /= input.value;
  } else if (_operator === "+") {
    output.value += input.value;
  } else {
    output.value -= input.value;
  }
};
</script>
<template>
  <div>
    <h2>{{ output.toFixed(2) }}</h2>
    <input type="number" v-model="input" />
    <div>
      <ul style="display: flex; flex-wrap: wrap; gap: 4px">
        <li v-for="(operator, index) in operators" :key="index">
          <button @click="calculate(operator)">{{ operator }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
}
</style>
