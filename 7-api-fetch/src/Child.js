import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    console.log("[CHILD] Constructor")
  }

  componentDidMount() {
    console.log("[CHILD] Component Did Mount")
  }

  componentDidUpdate() {
    console.log("[CHILD] Component Did Update");
  }

  componentWillUnmount() {
    console.log("[CHILD] Component Will Unmount");
  }

  render() { 

    console.log("[CHILD] Render")

    return ( <div>Child</div> );
  }
}
 
export default Child;