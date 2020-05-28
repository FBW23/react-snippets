import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = { todos: [] }
  }

  componentDidMount() {

    fetch("https://ds-todo-api.now.sh/todos")
    .then(res => res.json()) // get result => and get result as JSON
    .then(todoData => {
      // console.log("Data from ToDo API:", todoData)

      this.setState({todos: todoData})
    })
    
  }

  render() {

    let jsxTodos = this.state.todos.map(todo => (
      <div key={todo._id}>{todo.text}</div>
    ))

    return (
      <div className="App">
        <header className="App-header">
          <h2>API - Gimme that data! NOW!</h2>
        </header>
        <main>    
          <h3>ToDos</h3>
          <div className="cards">{jsxTodos}</div>
        </main>
      </div>
    );
  }
}

export default App;
