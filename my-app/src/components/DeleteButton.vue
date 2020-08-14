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
    },
  },
};
</script>