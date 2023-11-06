<script setup>
import { ref } from "vue";
const items = [
  ["(", ")", "%", "AC"],
  [7, 8, 9, "/"],
  [4, 5, 6, "X"],
  [1, 2, 3, "-"],
  [0, ".", "=", "+"],
];
const result = ref(0);
const prevValue = ref(0);
const operator = ref("");
const number = ref(0);

const calculate = (item) => {
  if (typeof item === "number") {
    let numberString = number.value.toString();
    numberString += item.toString();
    number.value = parseInt(numberString);
  } else if (item === "AC") {
    result.value = 0;
    number.value = 0;
    prevValue.value = 0;
    operator.value = "";
  } else {
    if (prevValue.value === 0) {
      prevValue.value = number.value;
    } else {
      if (operator.value === "X") {
        prevValue.value *= number.value;
      } else if (operator.value === "/") {
        prevValue.value /= number.value;
      } else if (operator.value === "+") {
        prevValue.value += number.value;
        console.log(prevValue.value);
      } else if (operator.value === "-") {
        prevValue.value -= number.value;
      } else if (operator.value === "%") {
        prevValue.value %= number.value;
      } else {
        operator.value = "";
      }
    }
    operator.value = item;
    number.value = 0;
  }
};
</script>
<template>
  <div>
    <h3 v-if="prevValue !== 0">
      {{ prevValue }}<span v-if="operator !== ''">{{ operator }}</span>
    </h3>
    <h1>{{ number }}</h1>
    <div>
      <ul style="display: flex; flex-direction: column">
        <li v-for="(item, index) in items" :key="index">
          <ul style="display: flex">
            <li v-for="(subItem, subIndex) in item" :key="subIndex">
              <button
                @click="calculate(subItem)"
                style="width: 64px; height: 40px"
              >
                {{ subItem }}
              </button>
            </li>
          </ul>
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
