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
                            src={`images/photo-Accueil.jpg`}
                            alt="tajine_test"
                        />
                    </div>
                    <div className="control-horaires">
                        <p> <span>" </span> Texte de présentation: qui sommes nous ? que faisons nous ?
                            quel est notre manifeste ?<span> "</span>
                        </p>

                    </div>

                    <div className="users-command container">
                        <div className="partuculier-container">
                            <button className="btn-particulier btn-control btn" type="submit">
                                PARTICULIER ?
                            </button>
                            <p> ipsum dolor sit amet consectetur adipisicing elit.
                                 Quis odio consectetur ratione id eius iusto libero,
                                    ?</p>
                        </div>

                        <br />
                        <div className="espacePro-container">
                            <button className="btn-entreprise btn-control btn" type="submit">
                                ÉVÈNEMENTS ?
                        </button>
                            <p> ipsum dolor sit amet consectetur adipisicing elit.
                                     Quis odio consectetur ratione id eius iusto libero,
                                    ?</p>
                        </div>

                    </div>
                </div>

                <Footer />

            </Fragment >

        )
    }
}



