import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateAgeFilter } from '../store/actions'

class PersonFilter extends Component {

  render() { 
    return ( <div className="person-search">
      <input type="text" placeholder="... Age filter ..." 
        onChange={(e) => this.props.updateAgeFilter(e.target.value)}
      />
    </div> );
  }
}
 
// this.props.updateAgeFilter
export default connect(null, { updateAgeFilter })(PersonFilter);