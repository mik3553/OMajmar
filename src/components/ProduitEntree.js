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

        // const handleDelete = () => {
        //     const idTodelete = JSON.stringify({
        //         _id: details._id,
        //     })
        //     const options = {
        //         method: 'DELETE',
        //         body: idTodelete,
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }
        //     fetch('http://localhost:3050/entree', options)
        //         .then(response => {
        //             if (response.ok) {
        //                 console.log(response)
        //             } else {
        //                 console.error('server response : ' + response.status);
        //             }
        //         }).catch(error => {
        //             console.error(error);
        //         });
        // }

        // let button = null
        // if (this.state.authenticated) {
        //     button = <AdminButton
        //                 handleDelete={handleDelete}
        //             />
        // }
 
        return (

            <figure className='figure' id={details._id}>
                <img src={`http://localhost:3050/${details.image}`} alt={details.title} />
                <figcaption>{details.title}</figcaption>
                <p>{details.ingredients}</p>
                <span>{details.price}€</span>
            </figure>
        )
    }
}
