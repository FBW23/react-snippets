import React, { Component } from 'react';
import { connect } from 'react-redux'

class PersonList extends Component {

  render() { 

    let persons = this.props.persons || []
    let jsxPersonList = persons.map(person => (
      <div className="person" key={person.name}>{person.name}</div>
    ))


    return ( <div className="persons">{jsxPersonList}</div> );
  }
}
 
let mapStateToProps = (state) => ({
  persons: state.persons
})

export default connect(mapStateToProps)(PersonList);
