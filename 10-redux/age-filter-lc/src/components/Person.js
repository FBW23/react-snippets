import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import { deletePerson } from '../store/actions'
import { updatePerson } from '../store/actions'

class Person extends Component {

  state = {
    name: this.props.data.name,
    age: this.props.data.age,
    editMode: false
  }

  toggleEditMode = () => {
    this.setState({editMode: !this.state.editMode})
  }

  handleEditPerson = (e) => {

    let name = this.state.name
    let age = this.state.age

    if(name && age) {
      this.props.updatePerson({ id: this.props.data.id, name, age})
      this.toggleEditMode()
    }
  }

  render() {

    let person = this.props.data
    let editMode = this.state.editMode

    return (
      <div className="person">
        <div></div>
        <div className="person-info" onDoubleClick={this.toggleEditMode}>
          <div className="person-name">
            { !editMode ? person.name : 
            <input type="text" value={this.state.name} 
              onChange={(e) => this.setState({name: e.target.value})}
            />
            }
          </div>
          <div className="person-age">
            { !editMode ? person.age :
            <input type="text" value={this.state.age} 
              onChange={(e) => this.setState({age: e.target.value})}
            />
            }
          </div>
        </div>
        <div className="person-actions">
          {editMode ? 
          <FontAwesomeIcon icon={faSave} 
            onClick={this.handleEditPerson}
          /> : ""
          }
          <FontAwesomeIcon icon={faEdit} 
            onClick={this.toggleEditMode}
          />
          <FontAwesomeIcon icon={faTrash} 
            onClick={() => this.props.deletePerson(person.id)} />
        </div>
      </div>
    );
  }
}

export default connect(null, { updatePerson, deletePerson })(Person);
