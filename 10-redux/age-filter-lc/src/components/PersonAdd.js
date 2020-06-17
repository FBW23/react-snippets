import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPerson } from '../store/actions';

class PersonAdd extends Component {

  // Local State / UI State
  state = {
    name: '', age: ''
  }

  render() { 

    console.log("Props:", this.props);

    return ( <div className="person-add">
      <input onChange={(e) => this.setState({name: e.target.value})}
        autoComplete="off" placeholder="Name..." type="text" name="name" />
      <input onChange={(e) => this.setState({age: e.target.value})}
        autoComplete="off" placeholder="Age..." type="number" name="age" />
      <button onClick={() => this.props.postPerson(this.state.name, this.state.age)}>ADD</button>
    </div> );
  }
}

// COMMON SYNTAX FOR MAKING FUNCTIONS AVAILABLE TO OUR COMPONENT
// THAT DISPATCH ACTIONS TO OUR REDUCER FOR US

// let mapDispatchToProps = (dispatch) => ({
//   addPerson: (name, age) => dispatch(addPerson(name, age))
// })

// SHORTHAND SYNTAX => connect will do the dispatch for us automatically
export default connect(null, { postPerson })(PersonAdd);