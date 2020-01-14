import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

import "../App.css";


export default class PageAccueil extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="landing-page">
                    <div className="bg-image">
                        <h2 className="absolute-Title">O'MAJMAR</h2>
                        <img
                            src="../images/morocco-325324_1920.png"
                            alt="tajine_test"
                        />
                    </div>
                    <div className="control-horaires">
                        <i>horaires</i>
                        <i>|</i>
                        <i>horaires</i>
                        <i>|</i>
                        <i>horaires</i>

                    </div>

                    <div className="users-command">

                        <button className="btn-particulier btn-control" type="submit">
                            MENU PARTICULIER
                                <p className="command">COMMANDE</p>
                        </button>

                        <button className="btn-entreprise btn-control" type="submit">
                            MENU ÉVÈNEMENT
                                <p className="devis">DEVIS</p>
                        </button>

                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }
}



