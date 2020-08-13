<template>
  <div class="todolistitem">
      いいいいいい
        <div v-for="(todo,key) in todos" v-bind:key="todo.id">
                {{ key }}{{ todo.title }} <DeleteButton :todo="todo" :id.sync="id"/>
        </div>
  </div>
</template>

<script>
import DeleteButton from './DeleteButton.vue'

export default {
    props: {
        todos: {
            type:Array,
            'default':[]
        }
    },
    components: {
        DeleteButton
    },
    
}
</script>