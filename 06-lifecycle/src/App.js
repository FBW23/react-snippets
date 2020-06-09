import React, { Component } from 'react';
import './App.css';
import Child from './Child';

class App extends Component {

  constructor() {
    super()

    this.state = { 
      teachers: []
    }

    console.log("[PARENT] Constructor called")
  }

  componentDidUpdate() {
    console.log("[PARENT] componentDidUpdate called")
  }

  // load our initial data
  componentDidMount() {

    console.log("[PARENT] componenDidMount called");

    let teachers = localStorage.getItem("TEACHERS")

    if(teachers && teachers.length > 0) {
      teachers = JSON.parse(teachers)
    }
    else {
      teachers = [{name: "Rob"}]
      localStorage.setItem("TEACHERS", JSON.stringify(teachers))
    }

    this.setState({ teachers }) // => { teachers: teachers }
  }

  addTeacher = () => {
    const strTeacherNew = prompt("Please give name: ")

    if(!strTeacherNew) {
      return
    }

    // update teachers copy
    const teachersNew = [...this.state.teachers, { name: strTeacherNew }]
    // update local storage
    localStorage.setItem("TEACHERS", JSON.stringify( teachersNew ))
    // update state
    this.setState({ teachers: teachersNew })
  }

  /**
   * Determine teacher by ID in state
   * Delete from state
   * Update local storage too
   */
  deleteTeacher = (name) => {

    if(!window.confirm("Really wanna delete me from your course?")) {
      return
    }

    const teachersNew = this.state.teachers.filter(teacher => teacher.name !== name)
    localStorage.setItem("TEACHERS", JSON.stringify( teachersNew ))
    this.setState({teachers: teachersNew})
  }

  render() {

    console.log("[PARENT] Render called");

    // render teachers from array to JSX UI elements
    let jsxTeachers = this.state.teachers.map(teacher => (
      <div onClick={ () => this.deleteTeacher(teacher.name) } key={teacher.name}>{teacher.name}</div>
    ))

    return (
      <div className="App">
        <header className="App-header">
          <h2>Lifecycle - now for real</h2>
        </header>
        <main>
          <h4>Teachers</h4>
          <div className="cards teachers">{jsxTeachers}</div>
          <div>
            <button onClick={() => this.addTeacher()}>Add teacher</button>
          </div>
          <div>
            <Child></Child>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
