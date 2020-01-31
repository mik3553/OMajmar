import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Galerie.css'

import galerie from '../ressources/galerie/galerie'

export default class Galerie extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             galerie : []
        }
    }
    componentDidMount(){
        this.setState({galerie})
    }
    
    render() {
        const galerie = [ ...this.state.galerie]
            .map(item =>
                
                <img 
                    className='galerieImage' key={item._id}
                    src={`/images/galerie/${item.img}`}
                    alt={item.title} />
            )

        return (
            <Fragment>
                <Header />
                <section className='galerie'>
                    <h2>Partage et convivialité à l'honneur</h2>
                    <article className='flexGalerie'>
                        {galerie}
                    </article>
                </section>
                <Footer />
            </Fragment>
        )
    }
}
