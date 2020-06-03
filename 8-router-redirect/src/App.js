import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import MathTest from './views/MathTest';
import TestResult from './views/TestResult';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={MathTest}></Route>
          <Route path="/result" component={TestResult}></Route>
          <Route path="*">
            <div>Oops. This page does not exist</div>
            <Link to="/">Back to Home</Link>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
