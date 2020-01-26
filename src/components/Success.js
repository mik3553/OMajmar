import React, { Component } from 'react'
import './Success.css'

export default class Success extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            div:true
        }
    }
    handleClose = () => {
        this.setState({div : null})
    }

    render() {
        let alert = <div className='success'>
                        <span onClick={this.handleClose}>X</span>
                        <p>Votre demande de devis en ligne a bien été reçus <br /> et sera traité dans les plus bref delais</p>
                    </div>
        if(!this.state.div){
            alert = null
        }
        return (
            <div>
              {alert}
            </div>
        )
    }
}
