import React, { Component } from "react";
import DrawTogglebutton from "./DrawTogglebutton";
import { Link } from 'react-router-dom'

import "../App.css";



export default class Header extends Component {



  render() {
    return (
      // <div></div>
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="espace" />

          <DrawTogglebutton>
            {/* SIDEBAR  */}
            <div className="toolbar_nav-aside">
              <ul>
                <li>ÉVÈNEMENTS</li>
                <li >GALERIE</li>
                <li >LA CARTE</li>
              </ul>
            </div>
          </DrawTogglebutton >


          <div className="toolbar_logo">
            <a>LOGO</a>
          </div>



          <div className="toolbar_nav-items">

            <ul>
              <li >ÉVÈNEMENTS</li>
              <li >GALERIE</li>
              <li >LA CARTE</li>
            </ul>

          </div>

        </nav>

      </header>
    )
  }

}




