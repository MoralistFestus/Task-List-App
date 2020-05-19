
const app = new Vue({
  el: '#app',
  data: {
    title: 'Task List App', // set App name
    newTodo: '',
    todos: [] // An array to store list of task
  },
  methods: {
    addTodo() {   // Use the push method to add new Object of Array to the app
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
    // ilterate through the Arrays and Mark all Task name
    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      });
    }
  }
});