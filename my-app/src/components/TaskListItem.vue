<template>
  <div class="todolistitem">{{ id }} {{ item.title }}</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>