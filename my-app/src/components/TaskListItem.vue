<template>
  <div class="todolistitem">
        <div v-for="(todo,key) in todos" v-bind:key="todo.id">
                {{ key }}{{ todo.title }} <DeleteButton id = {{ todo.id }}/>
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