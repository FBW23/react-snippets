import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = { 
      teachers: [],
      teacherNew: { name: '' }
    }
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

    // let teacherName = prompt("Please enter name:")
    let teachersCopy = [...this.state.teachers, this.state.teacherNew]
    localStorage.setItem("TEACHERS", JSON.stringify( teachersCopy ) )
    this.setState({teachers: teachersCopy})
  }

  handleTeacherNameInput = (e) => {
    let nameNew = e.target.value
    console.log(nameNew)
    this.setState({teacherNew: {name: nameNew}})
  }

  deleteTeacher = (name) => {
    // deletion method: filtering out the item we want to delete
    let teachersCopy = this.state.teachers.filter(teacher => teacher.name !== name)
    localStorage.setItem("TEACHERS", JSON.stringify( teachersCopy ) )
    this.setState({teachers: teachersCopy}) // updating the state
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
              <div onClick={ () => this.deleteTeacher(teacher.name) } key={teacher.name}>{teacher.name}</div>
              ))
            }
          </div>
          <form>
            <input name="name" type="text" 
              onChange={ (event) => this.handleTeacherNameInput(event) } />
            <button type="button" onClick={() => this.addTeacher()}>ADD</button>
          </form>
        </main>
        <footer>{ localStorage.getItem("COURSE") }</footer>
      </div>
    );
  }
}

export default App;
