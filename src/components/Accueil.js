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
                    <div className="control-content">
                        <p> <span>" </span> Texte de présentation: qui sommes nous ? que faisons nous ?
                            quel est notre manifeste ?  This HTML file is a template. If you open it directly in the browser, you will see an empty page.
                            You can add webfonts, meta tags, or analytics to this file.
                            The build step will place the bundled scripts into the <span> "</span>
                        </p>

                    </div>

                    <div className="users-command container">
                        <div className="partuculier-container">
                            <button className="btn-particulier btn-control btn" type="submit">
                                PARTICULIER ?
                            </button>
                            <p> ipsum dolor sit amet consectetur adipisicing elit.
                                 Quis odio consectetur ratione id eius iusto libero,
                                    ?ipsum dolor sit amet consectetur adipisicing elit.
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
                                    ?ipsum dolor sit amet consectetur adipisicing elit.
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



