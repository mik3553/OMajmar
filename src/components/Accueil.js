import React, { Component, Fragment } from 'react'


import Header from './Header'
import Footer from './Footer'
import Partenaires from './Partenaires'
import { Link } from 'react-router-dom'


import './accueil.css'




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

                            <h2 >
                               Osez le voyage culinaire
                            </h2>
                            
                            <br/>
                            
                            <p>
                                 O’Majmar vous invite à goûter à l’authenticité d’une cuisine familiale et traditionnelle en mettant en avant nos valeurs de partage, de convivialité pour déguster un plat typique du Maroc. 
                            </p>

                            <p>
                            Dans une démarche éco responsable nous travaillons exclusivement avec des produits frais et privilégions les récoltes de saison. <br/> Nous utilisons des packagings recyclables et/ou compostables ou durables. 
                            </p>

                            <p>
                            Afin d’éviter le gaspillage alimentaire et pour vous garantir une cuisine maison de qualité, nous vous demandons de bien vouloir passer commande 48h à l’avance avec un minimum de 5 personnes par commande. Au-delà de 30 personnes le délai s’étendra à 72h. 
                            </p>
                            <Link to={"/presentation"}> <span style={{ cursor: "pointer", fontSize: "1rem" }} >   En savoir plus  </span></Link> 


                            <i class="fas fa-chevron-down"></i>

                    </div>

                    <h2>Titre blabla du truc en bas</h2>

                    <div className="users-command container">

                        
                        <div className="particulier-container">
                            <button className="btn-particulier btn-control btn" type="submit">
                                <Link to="/menus" style={{ textDecoration: "none", color: "whitesmoke" }}> PARTICULIERS </Link>
                            </button>
                            <p>Passez un bon moment en dégustant des petits plats maison en famille, entre amis ou collègues. </p>
                            
                            <br/>
                            <p>Pour assurer une qualité de travail, veuillez prévoir 48h d’avance pour passer commande.   </p>

                        </div>

               

                        <div className="espacePro-container">
                            <button className="btn-entreprise btn-control btn" type="submit">
                                <Link to={"/evenements"} style={{ textDecoration: "none", color: "whitesmoke" }}> ORGANISATIONS </Link>
                            </button>
                            <p>  Profitez d'un moment de convivialité avec vos collaborateurs grâce à un voyage culinaire pour vos buffets, déjeuners d’affaires...
                                <Link to={"/devis"}><span className="lien-devis"><br/> Demandez un devis !</span></Link>
                            </p>
                            <br/>
                            
                            <p >
                            Pour assurer une qualité de travail, veuillez prévoir 72h d’avance pour passer commande. 
                            </p>
                        
                        </div>

                    </div>
                </div>

                <Partenaires/>

                <Footer />

            </Fragment >

        )
    }
}



