import React, { Component, Fragment } from 'react'

import Header from './Header'
import Footer from './Footer'

// import { Link } from 'react-router-dom'


import './presentation.css'

export default class Presentation extends Component {
  

    render() {
        return (

            <Fragment>

                <Header/>
                <div className="presentation">

                <div className="presentation-photo">

                        <img src={`a_propos/photo_camelia2.png`} alt="" className="photo-camelia"/>
                
                </div>
                

                <article className="presentation-text">

                  

                        <p>
                            Derrière O'Majmar, il y a Camélia, une entrepreneure qui se donne pour mission de valoriser la cuisine marocaine traditionnelle et familiale.
                        </p> 

                        <br/>

                        <p  >
                            La passion culinaire de Camélia est née il y a 13 ans, lors d’un voyage au Maroc. Dans la campagne d’Agadir, elle découvre et apprend l'art de la cuisine traditionnelle authentique par transmission familiale. Un véritable trésor culinaire.
                        </p> 

                        <br/>

                        <p 
                        // className="space-none"
                        >
                            Suite à ce voyage, Camélia confirme sa passion pour la cuisine et le contact humain en cumulant 5 années d'expérience dans la restauration collective.
                        </p> 


                        <br/>

                        <p>
                            Passionnée par la vie, la transmission et le partage autour de la table, cette maman de trois enfants souhaite aujourd'hui apporter l'Orient dans vos papilles pour faire de chacun de vos repas une véritable escapade culinaire.               
                        </p> 


                    </article>


                </div>

                

                <Footer/>
            </Fragment>
            
        )
    }
}
