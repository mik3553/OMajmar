import React, { Component, Fragment } from 'react'

export default class MenuEvenement extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.buttonMignardises = this.buttonMignardises.bind(this)
        this.buttonRepas = this.buttonRepas.bind(this)
        this.buttonGourmandises = this.buttonGourmandises.bind(this)

    }

    buttonMignardises = (e) => {
        e.preventDefault()

    }

    buttonRepas = (e) => {
        e.preventDefault()

    }

    buttonGourmandises = (e) => {
        e.preventDefault()

    }

    render() {
        return (

            <div className="container-menu btn" style={{ height: "7vh" }}>

                <button className="btn-control btn " >MIGNARDISES</button>
                <button className="btn-control btn " >REPAS</button>
                <button className="btn-control btn " >GOURMANDISES</button>

            </div>

        )
    }
}
