import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoList extends Component {

  getStyle = () =>{
   return{
    textDecoration: this.props.todo.complete ? 'line-through' : 'none'
   }
  }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
          {title}
          <button type="button" onClick={this.props.delTodo.bind(this,id)}>x</button>
          </p>
      </div>
    )
  }
}
TodoList.PropType ={
  todo: PropTypes.array.isRequired
};

export default TodoList
