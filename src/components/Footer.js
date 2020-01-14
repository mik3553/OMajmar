import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <div className='logo'>
                            <a href='hotmail.com'><img src='' alt='' /></a>
                        </div>
                        <p>A propos</p>
                        <p>CGV</p>
                        <p>Présentation</p>
                    </li>
                    <li>Livraison : 75,92,93</li>
                    <li>
                        <p>Contact :</p>
                        <p><a href="mailto:omajmart@gamil.com">omajmart@gamil.com</a></p>
                        <p>Tel: (+33) 06.21.49.16.37 </p>
                    </li>
                </ul>
            </footer>
        )
    }
}
