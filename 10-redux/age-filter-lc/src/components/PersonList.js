import React, { Component } from 'react';
import { connect } from 'react-redux'

class PersonList extends Component {

  render() { 
    console.log("Props: ", this.props)

    let persons = this.props.persons || []
    let jsxPersonList = persons.map(person => (
      <div key={person.name}>{person.name}</div>
    ))


    return ( <div>{jsxPersonList}</div> );
  }
}
 
let mapStateToProps = (state) => ({
  persons: state.persons
})

export default connect(mapStateToProps)(PersonList);
