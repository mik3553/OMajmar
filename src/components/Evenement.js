import React, { Component, Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Header from './Header'
import Footer from './Footer'

import ButtonEvenement from './ButtonEvenement';


import './evenement.css'

export default class Evenement extends Component {


    render() {

        return (
            <Fragment >
                <Header />
                <h1 className="titre-evenement">
                    événements
                </h1>
                <ButtonEvenement />

                <Footer />

            </Fragment>
        )
    }
}
