import React, { Component } from 'react'
// import AdminButton from './AdminPages/AdminButton'

export default class ProduitEntree extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         authenticated: null
    //     }
    // }
    
    render() {

        const { details } =this.props
        return (
            <figure className='figure' id={details._id}>
                <img src={`http://localhost:3050/${details.image}`} alt={details.title} />
                <figcaption>{details.title}</figcaption>
                <p>{details.ingredients}</p>
                <span>{details.price} €</span>
            </figure>
        )
    }
}
