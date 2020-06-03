import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>You passed this extreme challenging test. Congrats!</h1>
        <Link to="/">Do test once more!</Link>
      </div>
     );
  }
}
 
export default TestResult;