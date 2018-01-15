import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'reactstrap';
import './AddTodo.css'

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      todoInput: e.target.value
    })
  }

  emptyInputBox(){
    this.setState({
      todoInput: ""
    })
  }

  handleSubmit(e){
    e.preventDefault()
    var inputText = this.state.todoInput;
    if(inputText.length > 0){
      this.emptyInputBox()
      this.props.onAddTodo(inputText)
      var inputField = document.getElementById('todoInputText');
      ReactDOM.findDOMNode(inputField).focus();
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input id="todoInputText" type="text" placeholder="Add a new todo.." value={this.state.todoInput} onChange={this.handleChange}/> <br/>
          <Button color="primary" size="lg" block>Add</Button>
        </form>
      </div>
    )
  }
}

export default AddToDo
