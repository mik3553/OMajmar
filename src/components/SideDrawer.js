import React, { Component } from 'react'


export default class SideDrawer extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (

            <nav className="side-drawer">

                <ul>

                    <li><a href="/">Évènement</a></li>

                    <li><a href="/">Galerie</a></li>

                    <li><a href="/">La Carte</a></li>

                </ul>

            </nav>
        )
    }
}
