<template>
  <div class="taskinput">
    <input
      type="text"
      placeholder="add Todo..."
      v-model="newToDo"
      @keyup.enter="addListToDo(newToDo)"
    />
  </div>
</template>

<script>
export default {
  name: "TaskInput",
  props: {
    todos: {
      type: Array,
      default: () => {},
    },
    newToDo: {
      type: String,
      default: "",
    },
  },
  methods: {
    addListToDo: function (title) {
      if (!this.newToDO) {
        return;
      }
      const newToDo = {
        id: Date.now(),
        title: title,
      };
      this.todos.push(newToDo);
      this.newToDo = "";
    },
  },
};
</script>