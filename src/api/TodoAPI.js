import $ from 'jquery'

const TodoAPI = {
  setTodos: function (todos) {
    if($.isArray(todos)){
      let todosString = JSON.stringify(todos);
      localStorage.setItem('todos', todosString);
      // if successful, array gets passed back. Else, undefined gets returned
      return todos;
    }
  },

  getTodos: function () {
    let storedTodosString = localStorage.getItem('todos');
    let storedTodos = [];
    try {
      storedTodos = JSON.parse(storedTodosString);
    } catch (e) {
      console.log("Data is invalid");
    }
    // if no valid todos, we return an empty array
    return $.isArray(storedTodos) ? storedTodos : [];
  },

  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter( (todo) => {
      // return if completed is false. If showCompleted is set to true, then returned everything
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter( (todo) => {
      console.log(todo);
      if (searchText.length === 0) {
        return true;
      }

      // anything greater than -1 means there is the text we are looking for in it
      // normalize both to lower case
      if (todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        return true;
      }
    });


    // sort with completed todos at top
    filteredTodos.sort( (todo1, todo2) => {
      if (todo1.completed === false && todo2.completed === true) {
        // uncompleted item must come BEFORE completed items
        return -1;
      } else if (todo1.completed === true && todo2.completed === false) {
        // completed item must come AFTER completed items
        return 1;
      }
      return 0;
    });

    return filteredTodos;
  }

};

export default TodoAPI;
