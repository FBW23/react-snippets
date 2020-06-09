import React, { Component } from 'react';

class Child extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
    console.log("[CHILD] constructor called")
  }

  componendDidMount() {
    console.log("[CHILD] componendDidMount called");    
  }

  componendDidUpdate() {
    console.log("[CHILD] componendDidUpdate called");    
  }

  render() { 

    console.log("[CHILD] render called");

    return ( <div>Child</div> );
  }
}
 
export default Child;