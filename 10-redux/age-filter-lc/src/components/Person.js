import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import { deletePerson } from '../store/actions'
import { updatePerson } from '../store/actions'

class Person extends Component {

  handleEditPerson = (e) => {
    let personAge = prompt("New age:")
    console.log(personAge)
    this.props.updatePerson({...this.props.data, age: personAge})
  }

  render() {

    let person = this.props.data

    return (
      <div className="person">
        <div />
        <div className="person-info">
          <div>{person.name}</div>
          <div>{person.age}</div>
        </div>
        <div className="person-actions">
          <FontAwesomeIcon icon={faEdit} 
            onClick={this.handleEditPerson}
          />
          <FontAwesomeIcon icon={faTrash} 
            onClick={() => this.props.deletePerson(person.id)} />
        </div>
      </div>
    );
  }
}

export default connect(null, { updatePerson, deletePerson })(Person);
