import React, { Component } from 'react'
export default class Produit extends Component {

    constructor(props) {
        super(props)
        this.state = {
             isShow : false
        }
    }
    
    handleShow = () => {
        this.setState({isShow:!this.state.isShow })
    }

    render() {
        const { isShow }  =this.state
        const { details } =this.props
        return (
                <figure className='figure'>
                    <img src={require(`../images/${details.image}`)} alt={details.title} />
                    <figcaption>{details.title}</figcaption>
                    {isShow ? <p>{details.ingredients}</p> : null }
                    <span>{details.prix}€</span>
                    <button onClick={this.handleShow}><i className="fas fa-plus-square"></i></button>
                </figure>
        )
    }
}
