import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

import ProduitEntree from './ProduitEntree'
import ProduitPlat from './ProduitPlat'
import ProduitDessert from './ProduitDessert'

import Booking from './Booking'

export default class Carte extends Component {
    constructor(props) {
        super(props)
        this.state = {
             entrees : [],
             plats : [],
             desserts : []
        }
    }
    componentDidMount(){
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
                            console.log(response)
                            this.setState({entrees : response})
                        })
                } else {
                    console.error('server response : ' + response.status);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getPlats = () => {
        fetch('http://localhost:3050/plats')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((response) => {
                            console.log(response)
                            this.setState({ plats: response })
                        })
                } else {
                    console.error('server response : ' + response.status);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getDesserts = () => {
        fetch('http://localhost:3050/desserts')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((response) => {
                            console.log(response)
                            this.setState({ desserts: response })
                        })
                } else {
                    console.error('server response : ' + response.status);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const entrees = [...this.state.entrees]
            .map(entree => 
                <ProduitEntree
                    key={entree._id}
                    details = {entree}
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
                            <h3>entrées</h3>
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
                <Booking />
                <Footer />
                
            </Fragment >
        )
    }
}
