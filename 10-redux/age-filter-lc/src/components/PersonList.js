import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonList extends Component {
  
  render() {
    
    let persons = this.props.persons || [];
    let ageFilter = this.props.ageFilter

    // if ageFilter was set in filter component
    // then filter the list of persons here dynamically
    if(ageFilter) {
      persons = persons.filter(person => person.age >= ageFilter)
    }
    
    let jsxPersonList = persons.map((person) => (
      <div className="person" key={person.name}>
        <div>{person.name}</div>
        <div>{person.age}</div>
      </div>
    ));

    return <div className="persons">
      {persons.length > 0 ? jsxPersonList : <div>No people available</div>}
    </div>;
  }
}

let mapStateToProps = (state) => ({
  persons: state.persons, // this.props.persons
  ageFilter: state.ageFilter // this.props.ageFilter
});

export default connect(mapStateToProps)(PersonList);
