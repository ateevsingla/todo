import './App.css';

import React, { Component } from 'react'
import Todos from './components/Todos';
import Header from './Header';


export class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:'complete office work',
        complete:false
    },
    {
      id:2,
      title:'do lunch timely',
      complete:false
    },
    {
      id:3,
      title:'gym',
      complete:false
    }
  ]
  };
  
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.complete = !todo.complete
      }
      return todo;

    })});
  }
  delTodo = (id) => {
    this.setState({todos:[...this.state.todos.filter(todo =>
      todo.id !== id
    )]})
  }
 
  render() {
    return (
      <div>
      <Header/>
       <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    )
  }
}

export default App;
