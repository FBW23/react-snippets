import React, { Component } from 'react';

class UserDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      user: {
        // username: "Wasabis",
        // name: "Vasilis",
        // email: "vasilis@dci.org",
        // phone: "123456789",
        // website: "www.vasilis.com"
      } 
    };
  }

  componentDidMount() {

    console.log(this.props.match)
    console.log(this.props.match.params.userId)

    let userId = this.props.match.params.userId
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      this.setState({ user })
    })
  }

  render() {

    let user = this.state.user

    return (
      <div className="user-details">
        <h3>USER DETAILS</h3>
        {user ? ( 
          <>
            <h4 className="username">{user.username}</h4>
            <div className="details">
              <div className="name">{user.name}</div>
              <div className="email">{user.email}</div>
              <div className="phone">{user.phone}</div>
              <div className="website">{user.website}</div>
            </div>
          </>
        ) 
        : ""
        }
      </div>
    );
  }
}

export default UserDetails;
