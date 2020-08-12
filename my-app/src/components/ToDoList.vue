<template>
  <div class="todolist">
    <h1> {{ msg }} </h1>
        <input type="text" placeholder="add Todo.........." v-model="newToDo" @keyup.enter="addTodo(newToDo)">
        <div v-for="(todo,key) in todos" v-bind:key="todo.id">
            {{key}}:{{ todo.title }}   <button @click="removeTodo(todo)">削除</button>
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
         removeFlag : 0,
        }
      this.todos.push(newToDo);
      this.newToDo = '';
    },
    //changeFlag: function(){
    //   this.todo.removeFlag = this.todo.removeFlag == 0 ? 1 : 0
    //},
    removeTodo: function(todo) {
      const idx = this.todos.indexOf(todo)
      this.todos.splise(idx , 2)
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
