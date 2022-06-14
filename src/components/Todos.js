import React, { Component } from 'react'
import TodoList from './TodoList';


export class Todos extends Component {

   
  render() {
    return this.props.todos.map((todo) =>(
     <TodoList key={todo} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/> 
    )
    );
  }
}

export default Todos;
