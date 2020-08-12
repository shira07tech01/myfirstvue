<template>
  <div class="todolist">
    <h1> {{ msg }} </h1>
        <input type="text" placeholder="add Todo.........." v-model="newToDo" @keyup.enter="addTodo(newToDo)">
        <div v-for="(todo,key) in todos" v-bind:key="todo.id">
            <h3>{{key}}:{{ todo.title }} </h3>
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
      this.saveTodo();
    },
    saveTodo: function() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem(ToDosKW, parsed);
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
