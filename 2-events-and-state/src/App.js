import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      message: "Hello people",
      counter: 0
    }
    // this.increaseCounter = this.increaseCounter.bind(this)
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeMessage = () => {
    console.log("Change message called")
    // this.state.message = "Goodbye, let's start weekend early"
    this.setState({
      message: "Goodbye, let's start weekend early"
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="btn" onClick={this.changeMessage}>Click me</button>
          <div className="msg">{this.state.message}</div>
          <div className="msg" onClick={() => this.increaseCounter()} >Counter: {this.state.counter}</div>
        </header>
      </div>
    );

  }


}

export default App;
