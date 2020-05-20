import React, { Component } from 'react';
import './App.css';
import StudentList from './StudentList';

class App extends Component {
  constructor() {
    super();

    // THIS binding of a method
    // this.changeMessage = this.changeMessage.bind(this)
    // this.increaseCounter = this.increaseCounter.bind(this)
    this.state = {
      students: [
        { id: 1, name: 'Bendis', infected: false },
        { id: 2, name: 'Plamen', infected: true },
        { id: 3, name: 'Julia', infected: false },
        { id: 4, name: 'Nagster', infected: false },
        { id: 5, name: 'Aghy', infected: true }
      ]
    };
  }

  /**
   * Infect a person of the students list
   * by changing status infected from false to true 
   */
  toggleStatus = (id) => {
    let studentsNew = [ ...this.state.students ]; // create a copy
    let studentToUpdate = studentsNew.find((student) => student.id === id); // find student
    studentToUpdate.infected = !studentToUpdate.infected; // change his status to infected
    this.setState({ students: studentsNew }); // update / "overwrite" state
  };

  render() {
    let studentsList = this.state.students;
    let toggleStatus = this.toggleStatus;

    // studentsList = studentsList.filter(student => !student.infected)

    return (
      <div className="App">
        <header className="App-header">
          <h1>Corona Game</h1>
        </header>
        <main>{studentsList.length > 0 && <StudentList students={studentsList} toggleStatus={toggleStatus} />}</main>
        <footer>Reset</footer>
      </div>
    );
  }
}

export default App;
