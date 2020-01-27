
import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

import ProduitEntree from './ProduitEntree'
import ProduitPlat from './ProduitPlat'
import ProduitDessert from './ProduitDessert'

import './Carte.css'

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
        // setInterval(() => {
        this.getEntrees()
        this.getPlats()
        this.getDesserts()
        // }, 5000);
    }
    getEntrees = () => {
        fetch('http://localhost:3050/entrees')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((response) => {
                            this.setState({ entrees: response })
                        })
                }
            })
            .catch((error) => {
                // console.log(error);
            })
    }
    getPlats = () => {
        fetch('http://localhost:3050/plats')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((response) => {
                            this.setState({ plats: response })
                        })
                }
            })
            .catch((error) => {
                // console.log(error);
            })
    }
    getDesserts = () => {
        fetch('http://localhost:3050/desserts')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((response) => {
                            this.setState({ desserts: response })
                        })
                }
            })
            .catch((error) => {
                // console.log(error);
            })
    }
    render() {
        const entrees = [...this.state.entrees]
            .map(entree =>
                <ProduitEntree
                    key={entree._id}
                    details={entree}
                />)
        const plats = [...this.state.plats]
            .map(plat =>
                <ProduitPlat
                    key={plat._id}
                    details={plat}
                />)
        const desserts = [...this.state.desserts]
            .map(dessert =>
                <ProduitDessert
                    key={dessert._id}
                    details={dessert}
                />)

        return (
            <Fragment>
                <Header />
                <section className='carte'>
                    <h2>Lunch Box</h2>
                    <strong>Osez un voyage culinaire le temps d'une pause</strong>
                    <div className='flexCarte'>
                        <article>
                            <h3>Entrées</h3>
                            <div className='flexProduit' >
                                {entrees}
                            </div>
                        </article>

                        <article>
                            <h3>Plats</h3>
                            <div className='flexProduit' >
                                {plats}
                            </div>
                        </article>

                        <article>
                            <h3>Désserts</h3>
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

