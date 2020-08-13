<template>
  <div> class="todolist item">
        <button @click="deleteList(id)">削除</button>
  </div>
</template>

<script>

export default {
    name : 'DeleteButton',
    props:{
        todos:{
            type:Array,
            'default':[],
        }
    },
    methods: {
        deleteList : function(id) {
            this.todos.splice(id , 1)
            this.$emit('deleteList');
        }
    }
}



</script>