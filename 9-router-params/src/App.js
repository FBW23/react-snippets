import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import UserList from './views/UserList';
import UserDetails from './views/UserDetails';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" exact component={UserList}></Route>
          <Route path="/user/:userId" component={UserDetails}></Route>
        </Switch>
      </header>
    </div>
  );
  
}

export default App;
