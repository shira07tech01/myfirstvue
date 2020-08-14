<template>
  <div class="todolist">
    <div v-for="(todo,key) in todos" v-bind:key="todo.id">
      <TaskListItem :item="todo" :id="key" />
      <DeleteButton :todos="todos" :id="key" />
    </div>
  </div>
</template>

<script>
import TaskListItem from "./TaskListItem";
import DeleteButton from "./DeleteButton.vue";

export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    TaskListItem,
    DeleteButton,
  },
};
</script>