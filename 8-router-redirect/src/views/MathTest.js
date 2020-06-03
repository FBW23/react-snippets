import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class MathTest extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      success: false,
      result: null 
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if(this.state.result == 15) {
      this.setState({success: true, errors: ""})
    }
    else {
      this.setState({errors: "This is the wrong answer"})
    }
  }

  render() { 

    if(this.state.success) {
      return <Redirect to="/result"></Redirect>
    }

    return ( <div className="math-test">
      <h1>Math Test</h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            <code>What is 5*3?</code>
          </div>
          <input type="number" onChange={(e) => this.setState({result: e.target.value})}  />
          <button>Submit test</button>
          <div className="errors">{this.state.errors}</div>
        </div>
      </form>
    </div> );
  }
}
 
export default MathTest;