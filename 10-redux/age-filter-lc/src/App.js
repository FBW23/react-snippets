import React from 'react';
import './App.scss';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Filtering made easy</h1>
      </header>
      <main>
        <div className="persons-container">
          <PersonList></PersonList>
          <PersonAdd></PersonAdd>
        </div>
      </main>
      <footer>&copy; Copyright - Robazon store</footer>
    </div>
  );
}

export default App;
