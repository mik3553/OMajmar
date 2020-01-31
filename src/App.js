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
import Galerie from "./components/Galerie"
import Presentation from "./components/Presentation"

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
          <Route path='/galerie' component={Galerie} />
          <Route path='/cgv' component={Cgv} />
          <Route path='/presentation'  component={Presentation}/>
          <Route path='/monsite/mesapplis/traiteur/devs/' component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
