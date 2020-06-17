import React, { Component } from 'react';
import './App.scss';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import PersonFilter from './components/PersonFilter';
import { fetchPersons } from './store/actions'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    // call our async action to fetch data
    this.props.fetchPersons()
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Person List with Redux</h1>
        </header>
        <main>
          <div className="persons-container">
            <PersonFilter></PersonFilter>
            <PersonList></PersonList>
            <PersonAdd></PersonAdd>
          </div>
        </main>
        <footer>&copy; Copyright - Robazon store</footer>
      </div>
    );
  }
}

export default connect(null, { fetchPersons })(App);
