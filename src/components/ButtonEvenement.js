import React, { Component, Fragment } from 'react'

// Component
import Mignardise from '../evenement/Mignardise'
import Repa from '../evenement/Repa'
import Gourmandise from '../evenement/Gourmandise'

export default class ButtonEvenement extends Component {
    constructor(props) {
        super(props)

        this.state = {

            ShowMignardise: true,
            ShowRepas: true,
            ShowGourmandise: true

        }

        this.handleShowMignardise = this.handleShowMignardise.bind(this)
        this.handleShowRepas = this.handleShowRepas.bind(this)
        this.handleShowGourmandise = this.handleShowGourmandise.bind(this)

    }

    handleShowMignardise = (e) => {
        e.preventDefault()
        this.setState({
            ShowMignardise: !this.state.ShowMignardise

        })




    }

    handleShowRepas = (e) => {
        e.preventDefault()
        this.setState({
            ShowRepas: !this.state.ShowRepas
        })

    }

    handleShowGourmandise = (e) => {
        e.preventDefault()
        this.setState({
            ShowGourmandise: !this.state.ShowGourmandise
        })

    }

    render() {





        return (

            <Fragment >

                <div className="container-menu " style={{ height: "7vh" }}>
                    <button className="btn-control btn "
                        onClick={this.handleShowMignardise}
                    >MIGNARDISES</button>

                    <button className="btn-control btn "
                        onClick={this.handleShowRepas}
                    >REPAS</button>

                    <button className="btn-control btn "
                        onClick={this.handleShowGourmandise}
                    >GOURMANDISES</button>
                </div>

                {this.state.ShowMignardise ? null : <Mignardise />}
                {this.state.ShowRepas ? null : <Repa />}
                {this.state.ShowGourmandise ? null : <Gourmandise />}

            </Fragment>




        )
    }
}
