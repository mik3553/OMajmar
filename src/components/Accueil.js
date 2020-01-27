import React, { Component, Fragment } from 'react'


import Header from './Header'
import Footer from './Footer'

import { Link } from 'react-router-dom'


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
                    <div className="control-content">
                        <p> <span>" </span> Texte de présentation: qui sommes nous ? que faisons nous ?
                            quel est notre manifeste ?  This HTML file is a template. If you open it directly in the browser, you will see an empty page.
                            You can add webfonts, meta tags, e <Link to={"/evenements"}> <span style={{ cursor: "pointer", fontSize: "1rem" }} >  + d'infos </span></Link> <span> "</span>
                        </p>

                    </div>

                    <div className="users-command container">
                        <div className="partuculier-container">
                            <button className="btn-particulier btn-control btn" type="submit">
                                <Link to="/menus" style={{ textDecoration: "none", color: "whitesmoke" }}> PARTICULIER ?</Link>
                            </button>
                            <p> ipsum dolor sit amet consectetur adipisicing elit.
                                 Quis odio consectetur ratione id eius iusto libero,
                                    ?

                              </p>
                        </div>

                        <br />
                        <div className="espacePro-container">
                            <button className="btn-entreprise btn-control btn" type="submit">
                                <Link to={"/evenements"} style={{ textDecoration: "none", color: "whitesmoke" }}> ÉVÈNEMENTS ?</Link>
                            </button>
                            <p> ipsum dolor sit amet consectetur adipisicing elit.
                                     Quis odio consectetur ratione id eius iusto libero,
                                    ?
                                </p>
                        </div>

                    </div>
                </div>

                <Footer />

            </Fragment >

        )
    }
}



