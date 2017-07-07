new Vue({
  el: '#app',
  data: {
    new_todo: null,
    todos: []
  },
  methods: {
    add_todo: function () {
      this.todos.push(this.new_todo);
      this.new_todo = null;
    }
  },
  updated: function () {
    localStorage.setItem('vue-todo-storage-key', JSON.stringify(this.todos));
  },
  created: function () {
    var todos = localStorage.getItem('vue-todo-storage-key');

    if (todos) {
      this.todos = JSON.parse(todos);
    }
  }
});
