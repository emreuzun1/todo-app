<script setup>
import { reactive } from "vue";

let id = 0;

const state = reactive({
  input: "",
  todos: [],
  isEditMode: false,
  editIndex: -1,
});

// Adds todo to array
const addTodo = () => {
  state.todos.push({ id: id++, text: state.input });
  state.input = "";
};

// Prepare for edit a todo
const prepareEdit = (_input, index) => {
  state.isEditMode = true;
  state.input = _input;
  state.editIndex = index;
};

// Changes the todo's text
const editTodo = () => {
  state.todos[state.editIndex] = {
    id: state.todos[state.editIndex].id,
    text: state.input,
  };
  state.isEditMode = false;
  state.input = "";
  state.editIndex = -1;
};

// Deletes the todo from the todos array
const deleteTodo = (id) => {
  state.todos.splice(id, 1);
};
</script>

<template>
  <input v-model="state.input" type="text" />
  <button v-if="!state.isEditMode" @click="addTodo">Add</button>
  <button v-if="state.isEditMode" @click="editTodo">Edit</button>
  <ul>
    <li
      style="display: flex"
      v-for="(todo, index) in state.todos"
      :key="todo.id"
    >
      <p style="margin-right: 1rem">{{ todo.text }}</p>
      <button @click="deleteTodo(index)">X</button>
      <button @click="prepareEdit(todo.text, index)">Edit</button>
    </li>
  </ul>
</template>

<style></style>
