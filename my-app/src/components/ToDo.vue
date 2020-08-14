<template>
  <div class="todolist">
    <TaskInput @makeitem="addToDoList($event)" />
    <TaskList :todos="todos" />
  </div>
</template>

<script>
import TaskInput from "./TaskInput.vue";
import TaskList from "./TaskList.vue";

export default {
  name: "ToDo",
  components: {
    TaskInput,
    TaskList,
  },
  data: function () {
    return {
      todos: [],
      newToDoTitle: "",
      checkDone: 0,
    };
  },
  methods: {
    addToDoList(newToDo) {
      this.todos.push(newToDo);
    },
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
