import React, { Component } from 'react';
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {
  render(){
    var todos = this.props.todos;

    var renderTodos = () => {
      if (todos.length === 0) {
        return(
          <h3 className="text-center" >No Todos!</h3>
        )
      }
      return todos.map( (todo) => {
        return (
          <div className="todosList">
            <Todo key={todo.id} todoId = {todo.id} todoText = {todo.text} isTodoCompleted={todo.completed} onToggle = {this.props.onToggle} />

          </div>
        )
      })
    }
    return(
      <div className="todoListBox">
        {renderTodos()}
        <br/>
      </div>
    )
  }
}

export default TodoList
