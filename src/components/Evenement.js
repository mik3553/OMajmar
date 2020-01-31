import React, { Component, Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Evenement.css'

import Header from './Header'
import Footer from './Footer'
import Mignardise from '../evenement/Mignardise';
import Repa from '../evenement/Repa';
import Gourmandise from '../evenement/Gourmandise';

export default class Evenement extends Component {


    render() {

        return (
            <Fragment>
                <Header />
                <section className='evenements'>
                    <h2>Événements</h2>
                    <article>
                        <div className='slider'>
                            <h3>Mignardises</h3>
                            <Mignardise />
                        </div>
                        <div className='slider'>
                            <h3>Repas</h3>
                            <Repa />
                        </div>
                        <div className='slider'>
                            <h3>Gourmandise</h3>
                            <Gourmandise />
                        </div>
                    </article>
                </section> 
                <Footer />
            </Fragment>
        )
    }
}
