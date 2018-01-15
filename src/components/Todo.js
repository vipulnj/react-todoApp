import React, { Component } from 'react';
import { Label, Input, FormGroup } from 'reactstrap';
import './Todo.css'

class Todo extends Component {
  render(){
    var todoClassName = this.props.isTodoCompleted ? "todo todo-completed" : "todo"
    return(
      <div className={todoClassName} onClick= { () => {
        this.props.onToggle(this.props.todoId)
      }}>
        <FormGroup check>
        <Label check>&nbsp;&nbsp;
          <Input type="checkbox" defaultChecked={this.props.isTodoCompleted}
            // checked={this.props.isTodoCompleted}
            onChange= {this.handleShowCompleted} />
          &nbsp;{this.props.todoText}
        </Label>
      </FormGroup>

    </div>
    )
  }
}

export default Todo
