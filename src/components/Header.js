import React, { Component } from "react";
import DrawTogglebutton from "./DrawTogglebutton";
import { Link } from 'react-router-dom'


import "./header.css"


export default class Header extends Component {

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">

          <DrawTogglebutton>
            {/* SIDEBAR  */}
            <div className="toolbar_nav-aside">
              <ul>
                <li><Link to='/evenements'>ÉVÈNEMENTS</Link></li>
                <li><Link to='/menus'>LA CARTE</Link></li>
                <li><Link to='/galerie'>GALERIE</Link></li>
                <li><Link to='/reservation'>DEVIS EN LIGNE</Link></li>
              </ul>
            </div>
          </DrawTogglebutton >


          <div className="toolbar_logo">
            
              <Link to='/'><h1>O'MAJMAR</h1></Link>

          </div>



          <div className="toolbar_nav-items">

            <ul>
              <li><Link to='/evenements'>ÉVÈNEMENTS</Link></li>
              <li><Link to='/menus'>LA CARTE</Link></li>
              <li><Link to='/galerie'>GALERIE</Link></li>
              <li><Link to='/reservation'>DEVIS EN LIGNE</Link></li>
            </ul>

          </div>

        </nav>

      </header>
    )
  }

}




