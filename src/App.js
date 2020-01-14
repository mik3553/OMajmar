import React, { Component } from 'react';
// import Home from './components/Home'
import Carte from './components/Carte'
import LogPage from './components/LogPage'
import Booking from './components/Booking'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <LogPage />
        <Carte />
        <Booking />
      </div>
    )
  }
}

export default App;
