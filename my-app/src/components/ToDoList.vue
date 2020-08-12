<template>
  <div class="todolist">
    <h1> {{ msg }} </h1>
        <input type="text" placeholder="add Todo.........." v-model="newToDo" @keyup.enter="addTodo(newToDo)">
        <div v-for="(todo,key) in todos" v-bind:key="todo.id">
            {{key}}:{{ todo.title }}   <button @click="removeTodo(key)">削除</button>
        </div>
       <h1> 追加だけのTo Do List</h1>
  </div>
</template>

<script>
const ToDosKW = 'todos';
export default {
  name: 'ToDoList',
  props: {
    msg: String
  },
  data : function(){
    return{
      todos: [],
      newToDo: "",
      }
  },
  mounted: function(){
    if (localStorage.getItem(ToDosKW)) {
      try {
        this.todos = JSON.parse(localStorage.getItem(ToDosKW));
        if (!this.todos) {
          this.todos = []
          }
        } catch(e) {
          localStorage.removeItem(ToDosKW);
        
        }
    }
  },
  methods: {
    addTodo: function(title){
      if (!this.newToDo) {
        return;
        }
      const newToDo = {
         id : Date.now(),
         title : title,
        }
      this.todos.push(newToDo);
      this.newToDo = '';
    },
    removeTodo: function(id) {
      this.todos.splice(id , 1)
      }
    }
  }
  

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
