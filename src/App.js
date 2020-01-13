import React, { Component } from 'react';
// import Home from './components/Home'
import Carte from './components/Carte'
import LogPage from './components/LogPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <LogPage />
        <Carte />
      </div>
    )
  }
}

export default App;
