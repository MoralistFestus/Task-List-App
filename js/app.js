 // Create a constant variable
const app = new Vue({
  el: '#app',
  data: {
    title: '', // App Title
    newTodo: '',
    todos: [      // Arrays to store tasks (Objects)
      { title: 'Tasks Added by Default'},
      { title: 'Learn JavaScript'},
      { title: 'Learn VueJs'}, 
      { title: 'Build something Awesome'}
   ] 
  },
  methods: {
    addTodo() {   // Add newtodo List 
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = ''; 
    },
    // Remove Task name if remove button is clicked
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    // iterate through the Arrays and Mark all Task name
    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      });
    }
  }
});
/* Next update: 
1. LocalStorage supports: This feature will store user inputs in the browser
              for later usage.
2. Editing user input
*/