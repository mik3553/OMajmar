
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <ul>
                    <li><strong><Link to='/'>O'MAJMAR</Link></strong></li>
                    <li>
                        <a href='https://www.instagram.com/omajmar'><img src={`../../images/instagram.png`} alt='logo instagram' /> </a>
                        <p><Link to='/a propos'>A propos</Link></p>
                        <p><Link to='/cgv'>Conditions générale de vente</Link></p>
                    </li>
                    <li>Livraison :<br/> Paris et banlieus limitrophes</li>
                    <li>
                        <p>Contact :</p>
                        <p><a href="mailto:contact.omajmart@gmail.com">omajmart@gmail.com</a></p>
                        <p>Tel: (+33) 06.21.49.16.37 </p>
                    </li>
                </ul>
            </footer>
        )
    }
}
