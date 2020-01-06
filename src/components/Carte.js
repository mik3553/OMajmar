import React, { Component } from 'react'
import Footer from './Footer'

export default class Carte extends Component {
    render() {
        return (
            <div className='carte'>
                <h2>Lunch Box</h2>
                <strong>Osez un voyage culinaire<br/>le temps d'une pause déjeuner</strong>
                <section>
                    <article>
                        <h3>entrée</h3>
                        <figure>
                            <img src={require("../images/oeufs.jpeg")} alt="oeufs" />
                            <figcaption>Bostella</figcaption>
                        </figure>
                    </article>
                    <article>
                        <h3>plat</h3>
                    </article>
                    <article>
                        <h3>déssert</h3>
                    </article>
                </section>

                <Footer />
            </div>
        )
    }
}
