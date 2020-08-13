<template>
  <div class="todolist">
    <TaskInput :todos.sync="todos" :newToDo.sync="newToDo" />
    <TaskListItem :todos.sync="todos" />
  </div>
</template>

<script>
import TaskInput from "./TaskInput.vue";
import TaskListItem from "./TaskListItem.vue";

export default {
  name: "ToDo",
  components: {
    TaskInput,
    TaskListItem,
  },
  data: function () {
    return {
      todos: [],
      newToDo: "",
      checkDone: 0,
    };
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
