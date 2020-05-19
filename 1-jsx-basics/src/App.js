import React from 'react';
import logo from './logo.svg';
import logo512 from './images/logo513.png'
import './App.scss';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
