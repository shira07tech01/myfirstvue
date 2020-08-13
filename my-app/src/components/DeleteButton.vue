<template>
  <div>
    <class="todolistitem">
    <button @click="deleteList">削除</button>
  </div>
</template>

<script>
export default {
  name: "DeleteButton",
  props: {
    todo: {
      type: Object,
      default: () => {},
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    deleteList: function () {
      this.todos.splice(this.id, 1);
    },
  },
};
</script>