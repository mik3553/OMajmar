import React, { Component, Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Header from './Header'
import Footer from './Footer'
import Mignardise from '../evenement/Mignardise'

import EvenementMenu from './MenuEvenement'



export default class Evenement extends Component {


    render() {

        return (
            <Fragment >
                <Header />



                <EvenementMenu />
                <Mignardise />


                <Footer />

            </Fragment>
        )
    }
}
