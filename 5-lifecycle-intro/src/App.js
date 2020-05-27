import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = { teachers: []}
  }

  /**
   * Executed after FIRST render
   * 
   * This is the place where we load DATA by convention
   */
  componentDidMount() {
    // load data from local storage (=> we always receive data from there as STRINGS!)
    let teachersInitial = localStorage.getItem("TEACHERS")

    // if we got something in local storage => parse it!
    if(teachersInitial) {
      // parse JSON string into an array
      teachersInitial = JSON.parse(teachersInitial)
    }
    // if we do not have anything in local storage => initialize some data in local storage
    else {
      teachersInitial = [{name: "Martina"}]
      localStorage.setItem("TEACHERS", JSON.stringify(teachersInitial))
    }

    // set our initial state
    this.setState({teachers: teachersInitial})
  }

  /**
   * Adding a teacher should PERSIST in out state
   */
  addTeacher = () => {

    let teacherName = prompt("Please enter name:")
    let teacherNew = { name: teacherName }
    let teachersCopy = [...this.state.teachers, teacherNew]
    localStorage.setItem("TEACHERS", JSON.stringify( teachersCopy ) )
    this.setState({teachers: teachersCopy})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Life is about cycles - isn't it?</h2>
        </header>
        <main>    
          <div className="cards teachers">
            {
              this.state.teachers.map(teacher => (
              <div key={teacher.name}>{teacher.name}</div>
              ))
            }
          </div>
          <button type="button" onClick={() => this.addTeacher()}>ADD</button>
        </main>
        <footer>{ localStorage.getItem("COURSE") }</footer>
      </div>
    );
  }
}

export default App;
