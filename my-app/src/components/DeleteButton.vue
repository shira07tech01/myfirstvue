<template>
  <div class="deletebutton">
    <button @click="deleteList">削除</button>
  </div>
</template>

<script>
export default {
  name: "DeleteButton",
  props: {
    todos: {
      type: Array,
      required: true,
    },
    id: {
      type: Number,
      reqired: true,
      default: 0,
    },
  },
  methods: {
    deleteList: function () {
      this.todos.splice(this.id, 1);
      this.$emit("delete", this.todos);
    },
  },
};
</script>