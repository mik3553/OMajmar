import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// Nos components imports
import Carte from './components/Carte'
import LogPage from './components/LogPage'
import Booking from './components/Booking'
import Accueil from './components/Accueil'
import Evenement from "./components/Evenement"

// nos CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Accueil} />
          <Route path='/menus' component={Carte} />
          <Route path='/inscription-connexion' component={LogPage} />
          <Route path='/reservation' component={Booking} />
          <Route path='/evenements' component={Evenement} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
