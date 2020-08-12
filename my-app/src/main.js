const ToDosKW = 'todos';

const app = new Vue({
    el:'#app',
    data:{
        todos: [],
        newToDo:"",
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
    methods:{
        addTodo: function(title){
            if (!this.newToDo) {
                return;
            }
            const newToDo = {
                id : Date.now(),
                title : title,
            }
            this.todos.push(this.newToDo);
            this.newToDo = '';
            this.saveTodo();
        },
        saveTodo: function() {
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem(ToDosKW, parsed);
        }
    }
})