import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Nos components imports
import Carte from './components/Carte'
import LogPage from './components/LogPage'
import Booking from './components/Booking'
import Accueil from './components/Accueil'
import Evenement from "./components/Evenement"
import Cgv from "./components/Cgv"
import Admin from "./components/AdminPages/Admin"
// nos CSS
import "./App.css";
import './components/AdminPages/Admin.css'

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
          <Route path='/cgv' component={Cgv} />
          <Route path='/monsite/mesapplis/traiteur/devs/' component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
