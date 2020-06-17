import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../store/actions';

class PersonAdd extends Component {

  // Local State / UI State
  state = {
    name: '', age: ''
  }

  // handleInputChange = (e) => {
  //   // in case we changed the input with name "name"
  //   // e.target.name = "name", e.target.value (= whatever we put into the input) 
  //   this.setState({[e.target.name]: e.target.value})
  // }

  render() { 

    console.log("Props:", this.props);

    return ( <div className="person-add">
      <input onChange={(e) => this.setState({name: e.target.value})}
        autoComplete="off" placeholder="Name..." type="text" name="name" />
      <input onChange={(e) => this.setState({age: e.target.value})}
        autoComplete="off" placeholder="Age..." type="number" name="age" />
      <button onClick={() => this.props.addPerson(this.state.name, this.state.age)}>ADD</button>
    </div> );
  }
}

// COMMON SYNTAX FOR MAKING FUNCTIONS AVAILABLE TO OUR COMPONENT
// THAT DISPATCH ACTIONS TO OUR REDUCER FOR US

// let mapDispatchToProps = (dispatch) => ({
//   addPerson: (name, age) => dispatch(addPerson(name, age))
// })

// SHORTHAND SYNTAX => connect will do the dispatch for us automatically
export default connect(null, { addPerson })(PersonAdd);