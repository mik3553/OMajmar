import React, { Component } from 'react'
export default class Produit extends Component {


    render() {
        const { details } =this.props
        return (
                <figure className='figure'>
                    <img src={require(`../images/${details.image}`)} alt={details.title} />
                    <figcaption>{details.title}</figcaption>
                    <p>{details.ingredients}</p>
                    <span>{details.prix}€</span>
                </figure>
        )
    }
}
