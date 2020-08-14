<template>
  <div class="taskinput">
    <input
      type="text"
      placeholder="add Todo..."
      v-model="title"
      @keyup.enter="makeListToDoItem(title)"
    />
  </div>
</template>

<script>
export default {
  name: "TaskInput",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    makeListToDoItem: function (title) {
      const newToDo = {
        id: Date.now(),
        title: title,
      };
      this.$emit("makeitem", newToDo);
    },
  },
};
</script>