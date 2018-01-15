import React, { Component } from 'react';
import { Label, Input, FormGroup } from 'reactstrap';

class TodoSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCompleted: this.props.showCompleted,
      searchText: this.props.searchText
    }
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleShowCompleted = this.handleShowCompleted.bind(this);
  }

  handleShowCompleted(e){
    this.setState({
      showCompleted: e.target.checked
    })
    this.props.onShowCompletedChange(e.target.checked);
  }

  handleSearchText(e){
    this.setState({
      searchText: e.target.value
    })
    this.props.onSearchTextChange(e.target.value);
  }

  render(){
    return(
      <div>
        <div>
          <Input type="search" value={this.state.searchText} placeholder="Search todos" onChange={this.handleSearchText}/>
        </div>

        <FormGroup className="text-right" check>
          <Label check>Show Completed &nbsp;&nbsp;
          <Input addon type="checkbox" checked={this.state.showCompleted}
            onChange= {this.handleShowCompleted} />
          </Label>
          <br/><br/>
        </FormGroup>
      </div>
    )
  }
}

export default TodoSearch
