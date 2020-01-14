
import React, { Component } from "react";
// import Home from './components/Home'
import Evenement from "./components/Evenement"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'  //où??
import "./App.css";
import Carte from './components/Carte'
import LogPage from './components/LogPage'


class App extends Component {
  render() {
    return (
      <div>
        {/* <Home path="/" /> */}
        <Evenement path="/evenements" />
        {/* Galerie */}
        {/* LaCarte */}
        <LogPage />
        <Carte />
      </div>
    );
  }
}

export default App;
