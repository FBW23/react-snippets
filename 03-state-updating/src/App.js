import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [] // every player has a name and experience
    };
  }

  // increase the experience of an existing player
  updatePlayer = (name) => {

    // creating a copy of state (because React requires this)
    let playersCopy = [...this.state.players]

    // grab the item to update
    let playerToUpdate = playersCopy.find(player => player.name === name)
    console.log(playerToUpdate)

    // updating single item in array
    playerToUpdate.experience++

    // updating the state
    this.setState({ players: playersCopy })
  }

  // generates a random player and appends it to our players state
  addPlayer = () => {
    let playerName = "Player-" + Math.round(Math.random()*100);
    let playerNew = { name: playerName, experience: 0 }
    console.log(playerNew)

    // create copy of state
    let playersCopy = [...this.state.players]
    // add an item to copy
    playersCopy.push(playerNew)

    // update / overwrite state
    this.setState({ players: playersCopy})
  }

  render() {
    let playerList = this.state.players;

    // convert player list to JSX list
    let jsxPlayerList = playerList.map((player) => (
      <li key={player.name} onClick={() => this.updatePlayer(player.name)}>
        <div>{player.name}</div>
        <div className="experience">Experience: {player.experience}</div>
      </li>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1>Gamify me</h1>
        </header>
        <nav>
          <button onClick={this.addPlayer}>Add player</button>
        </nav>
        <main>
          {playerList.length > 0 && (
            <div>
              <h4>Players</h4>
              <ul>{jsxPlayerList}</ul>
            </div>
          )}
        </main>
        <footer>The next game of all time</footer>
      </div>
    );
  }
}

export default App;
