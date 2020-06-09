import React, { Component } from 'react';

class StudentList extends Component {

  constructor(props) {
    super(props);

    this.studentsList = this.props.students
    this.toggleStatus = this.props.toggleStatus
  }

  render() {
    let jsxStudentsList = this.studentsList.map((student) => (
      <li onClick={() => this.toggleStatus(student.id)}>
        <div>{student.name}</div>
        {student.infected && (
          <div className="status">
            <b>Infected</b>
          </div>
        )}
      </li>
    ));

    return (
      <div>
        <ul>{jsxStudentsList}</ul>
      </div>
    );
  }
}

export default StudentList;
