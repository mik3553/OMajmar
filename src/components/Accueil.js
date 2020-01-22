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

                        <img
                            src={require("../images/photo-Accueil.jpg")}
                            alt="tajine_test"
                        />
                    </div>
                    <div className="control-horaires">
                        <p> <span>" </span> Texte de présentation: qui sommes nous ? que faisons nous ?
                            quel est notre manifeste ?<span> "</span>
                        </p>

                    </div>

                    <div className="users-command container">

                        <button className="btn-particulier btn-control btn" type="submit">
                            PARTICULIER ?
                        </button>
                        <br />
                        <button className="btn-entreprise btn-control btn" type="submit">
                            ÉVÈNEMENTS ?
                        </button>

                    </div>
                </div>

                <Footer />

            </Fragment>

        )
    }
}



