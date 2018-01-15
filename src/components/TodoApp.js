import React, { Component } from 'react';
import uuid from 'uuid'
import { Row, Col } from 'reactstrap';

import TodoList from './TodoList'
import AddToDo from './AddTodo'
import TodoSearch from './TodoSearch'
import './TodoApp.css'
import TodoAPI from '../api/TodoAPI'

class TodoApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCompleted: false,
      searchText: "",
      todos: TodoAPI.getTodos()
    }

    // this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleShowCompleted = this.handleShowCompleted.bind(this);
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate(){
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddToDo(inputText){
    this.setState({
      todos: [
        // the spread operator
        ...this.state.todos,
        {
          id: uuid(),
          text: inputText,
          completed: false
        }
      ]
    })
  }

  // handleSearch(inputSearchText, inputShowCompleted){
  //   console.log("***", inputSearchText);
  //   console.log("***", inputShowCompleted);
  // }

  handleSearchText(inputSearchText){
    this.setState({
      searchText: inputSearchText
    })

    // this.handleSearch(inputSearchText, this.state.showCompleted)
  }

  handleShowCompleted(inputShowCompleted){
    this.setState({
      showCompleted: inputShowCompleted
    })
    // this.handleSearch(this.state.searchText, inputShowCompleted)
  }

  handleToggle(id){
    let updatedTodos = this.state.todos.map( (todo) => {
      if(id === todo.id){
        todo.completed = !todo.completed
      }
      console.log(todo);
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  render() {

    let searchText_filter = this.state.searchText;
    let todos_filter = this.state.todos;
    let showCompleted_filter = this.state.showCompleted;

    let filteredTodos = TodoAPI.filterTodos(todos_filter, showCompleted_filter, searchText_filter);


    return (
      <div className="bgImage">
        <br/><br/>
        <Row >
          <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
            <h1 className="display-3 heading">Todo App</h1>
          </Col>
        </Row>
        <br/><br/>

        <Row>
          <Col xs="4"></Col>
          <Col xs="4">
            <TodoSearch
              searchText={this.state.searchText}
              onSearchTextChange = {this.handleSearchText}
              onShowCompletedChange = {this.handleShowCompleted}
            />
          </Col>
          <Col xs="4"></Col>

        </Row>
        <Row >
          <Col xs="4"></Col>
          <Col xs="4" className="todoListRow">
            <br/>
            <TodoList
              todos = {filteredTodos}
              onToggle={this.handleToggle}/>
          </Col>
        </Row>
        <br/>
      <Row>
        <Col xs="4"></Col>
        <Col xs="4">
          <AddToDo onAddTodo={this.handleAddToDo}/>
        </Col>
        <Col xs="4"></Col>
      </Row>
      </div>
    );
  }
}

export default TodoApp;
