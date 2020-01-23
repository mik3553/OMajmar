import React, { Component, Fragment } from 'react'
import Footer from './Footer'
import Produit from './Produit'

//Nos données
import entrees from '../carte/entrees'
import plats from '../carte/plats'
import desserts from '../carte/desserts'
import Header from './Header'


export default class Carte extends Component {
    constructor(props) {
        super(props)

        this.state = {
            entrees: [],
            plats: [],
            desserts: []
        }
    }

    componentDidMount() {
        this.setState({ entrees, plats, desserts })
    }

    render() {

        // fetch('http://localhost:3050/entrees', { mode: 'no-cors' })
        //     .then(response => {
        //         console.log(response)
        //         if (response.ok) {
        //             response.json()
        //         }
        //     });
        // fetch("https://brianboudrioux.fr/simplon/api/products")
        //     .then(response => {
        //         console.log(response)
        //         if (response.ok) {
        //             response.json()
        //                 .then((response) => {
        //                     const film = response.forEach((item) => {
        //                         console.log(item.name);
        //                         const response = this.state.response
        //                         this.setState({ response: item.name })
        //                     })
        //                 })
        //         } else {
        //             console.error('server response : ' + response.status);
        //         }
        //     })
        //     .catch(console.error)


        const entrees = [...this.state.entrees]
            .map(entree =>
                <Produit
                    key={entree._id}
                    details={entree}
                />)
        const plats = [...this.state.plats]
            .map(plat =>
                <Produit
                    key={plat._id}
                    details={plat}
                />)
        const desserts = [...this.state.desserts]
            .map(dessert =>
                <Produit
                    key={dessert._id}
                    details={dessert}
                />)


        return (

            <Fragment>
                <Header />
                <section className='carte'>
                    <h2>Lunch Box</h2>
                    <strong>Osez un voyage culinaire<br />le temps d'une pause déjeuner</strong>
                    <div className='flexCarte'>
                        <article>
                            <h3>Entrées</h3>
                            <div className='flexProduit' >
                                {entrees}
                            </div>
                        </article>

                        <article>
                            <h3>plat</h3>
                            <div className='flexProduit' >
                                {plats}
                            </div>
                        </article>

                        <article>
                            <h3>déssert</h3>
                            <div className='flexProduit' >
                                {desserts}
                            </div>
                        </article>
                    </div>
                </section>
                <Footer />
            </Fragment >
        )
    }
}

