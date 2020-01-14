import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'



export default class Evenement extends Component {

    render() {
        let mignardises = [
            "Palmier aux olives",

            "Brochette de champignon rotis à la marocaine",

            "Mini quiche sans pâte façon tajine au poulet aux olives",

            "Financier de potiron",

            "Boulette de sardine",

            "Brochette de poulet mariné",

            "Rose brisée à la viande hachée",

            "Cigare au poulet curry",

            "Brick à la viande hachée et pomme de terre",

            "Brick de thon / tomate au fromage frais",

            "Compotée d'oignons à la cannelle",

            "Zaâlouk de carotte",

            "Pomme de terre assaisonnée",

        ]


        let repas = [
            "Tajine aux légumes",

            "Tajine au poulet et ses olives",

            "Tajine de veau et ses pruneaux",

            "Tajine aux sardines",

            "Tajine Kefta",

            "Lentille à la marocaine",

            "Haricot blanc à la marocaine",

            "Velouté d'orient"

        ]



        let gourmandises = [
            "Richbond marocain",

            "Cube de sésame garni",

            "Flan à la cannelle",

            "Brochette de fruits",

            "Salade de fruits séchés",

            "Orange à la cannelle",

            "Cube d'energie aux dattes",

            "Moelleux au chocolat/amande",

            "Cake aux raisins blonds",

            "Cigare aux amandes",

            "Rose de pomme à la cannelle",

            "Abricot sec à la nigelle",

            "Baghrir"

        ]

        let mignardiseList = mignardises.map(mignardise => <li key='mignardise' className="mignardise-items">{mignardise}</li>)
        let repasList = repas.map(repa => <li key='repa' className="repas-items">{repa}</li>)
        let gourmandisesList = gourmandises.map(gourmandise => <li key='gourmandise' className="gourmandise-items"> {gourmandise}</li>)
        return (
            <Fragment>
                <Header />
                < div className="evenement" >
                    {/* <header className="header-event">
                        <a >LOGO</a>
                        <h1 > ÉVÈNEMENTS</h1>
                        <a>connexion</a>

                    </header> */}

                    <div className="container-mignardise">
                        {/* bg-image ? */}
                        <h2>MIGNARDISES</h2>

                        <ul className="list-mignardise">
                            {mignardiseList}
                        </ul>
                    </div>
                    <br />
                    <div className="container-repas">
                        {/* bg-image ? */}
                        <h2>REPAS</h2>
                        <ul className="list-repas">
                            {repasList}
                        </ul>

                    </div>
                    <br />

                    <div className="container-gourmandise">
                        {/* bg-image ? */}
                        {/* <a> ou <link> ????*/}
                        <h2>GOURMANDISES</h2>
                        <ul className="list-gourmandise">
                            {gourmandisesList}
                        </ul>
                        {/* </a> */}
                    </div>
                    <br />
                    {/* composant devis */}

                </div >
                <Footer />
            </Fragment>
        )
    }
}
