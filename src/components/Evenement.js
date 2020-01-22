import React, { Component, Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import Header from './Header'
import Footer from './Footer'
// import Mignardise from '../evenement/Mignardise'
// import mignardises from '../evenement/mignardises'
// import repas from '../evenement/repas'
// import gourmandises from '../evenement/gourmandises'
import EvenementMenu from './MenuEvenement'
import MignardiseTest from '../evenement/MignardiseTest';



export default class Evenement extends Component {


    render() {





        // let mignardiseList = mignardises.map(mignardise => <div></div>)
        // let repasList = repas.map(repa => <li key='repa' className="repas-items">{repa}</li>)
        // let gourmandisesList = gourmandises.map(gourmandise => <li key='gourmandise' className="gourmandise-items"> {gourmandise}</li>)
        return (
            <Fragment>
                <Header />
                <EvenementMenu />
                {/* < div className="evenement" >
                    <div class="carousel-container">
                        <i class="fas fa-arrow-left" id="prevBtn"></i>
                        <i class="fas fa-arrow-right" id="nextBtn"></i>
                        <div class="carousel-slide">
                            <div class="container-photo" id="lastClone">

                                <div class="description">
                                    <h2>{mignardises.intitulé}</h2>

                                </div>
                            </div>
                        </div >
                    </div>
                </div> */}

                {/* AUCUNE PHOTO */}
                {/* <div className="mignardises">
                    {mignardises.map((mignardise, i) => {
                        return <div key={i}><img src={`../images/${mignardises.picture}`} alt={mignardises.intitulé} /></div>
                    })}
                </div> */}


                {/* récupération de d'une seule photo */}
                {/* <div>
                    <img src={require(`../images/${mignardises[0].picture}`)} style={{ width: "370px", heigth: "150px" }} />
                </div> */}
                <div className="container-menu">
                    {/* <Mignardise /> */}

                    <MignardiseTest />
                    {/* <Repas />
                    <Gourmandise /> */}

                </div>
                {/* 
                <Slider {...settings}>
                    {mignardises.map((mignardises, i) => {
                        return (
                            <div>
                                <img width="100%" src={`../images/${mignardises.picture}`} />
                            </div>
                        );
                    })}
                </Slider> */}

                {/* <img src={`../images/${mignardises.picture}`} /></div> */}

                {/* 
                    <div className="container-mignardise">

                        <h2>MIGNARDISES</h2>

                        <ul className="list-mignardise">
                            {mignardiseList}
                        </ul>
                    </div>
                    <br />
                    <div className="container-repas">

                        <h2>REPAS</h2>
                        <ul className="list-repas">
                            {repasList}
                        </ul>

                    </div>
                    <br />

                    <div className="container-gourmandise">

                        <h2>GOURMANDISES</h2>
                        <ul className="list-gourmandise">
                            {gourmandisesList}
                        </ul>

                    </div>
                    <br /> */}





                <Footer />
            </Fragment>
        )
    }
}
