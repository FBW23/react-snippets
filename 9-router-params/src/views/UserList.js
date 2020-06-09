import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

class UserList extends Component {
  state = {
    users: [
      // { id: 1, username: 'U1', name: 'User1', email: 'u1@dci.com' },
      // { id: 2, username: 'U2', name: 'User2', email: 'u2@dci.com' },
      // { id: 3, username: 'U3', name: 'User3', email: 'u3@dci.com' }
    ]
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      setTimeout(() => {
        this.setState({ users }) // => { users: users }
      }, 3000)
    })
  }

  render() {
    let users = this.state.users;

    let jsxUserList = users.map((user) => (
      <div className="user">
        <div className="username">{user.username}</div>
        <div className="details">
          <div className="name">{user.name}</div>
          <div className="email">{user.email}</div>
        </div>
        <div className="link">
          <Link to={`/user/${user.id}`}>User's Details</Link>
        </div>
      </div>
    ));

    return (
      <>
        <h3>USER LIST</h3>
        <div className="users">
          {users.length ? jsxUserList : (
            <div className="loading">
              <FontAwesomeIcon icon={faSpinner} pulse ></FontAwesomeIcon>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default UserList;
