
import React, { Component, Fragment } from 'react'
import Header from "./Header";
import Footer from "./Footer";

export default class Booking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            organisme: '',
            name: '',
            email: '',
            phone: '',
            numberOfPersons: '',
            budget: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        const post = JSON.stringify({
            organization: this.state.organisme,
            personToContact: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            numberOfPersons: this.state.numberOfPersons,
            budget: this.state.budget,
            message: this.state.message
        })

        const options = {
            method: 'POST',
            body: post,
            headers: { 'content-type': 'application/json' }
        }
        fetch('http://localhost:3050/booking/create', options)
            .then(response => {
                if (response.ok) {
                } else {
                    console.error('server response : ' + response.status);
                }
            }).catch(error => {
                console.error(error);
            });

        const message = this.state
        Object.keys(message)
            .forEach(item => {
                message[item] = ''
            })
        this.setState({ ...message })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='bookingPage'>
                    <h2>Demande de devis en ligne</h2>
                    <form className='bookingForm' onSubmit={this.handleSubmit}>
                        <fieldset>
                            <label>Nom de l'oraganisme <span className='required'>*</span> :</label>
                            <input
                                value={this.state.organisme}
                                type='text'
                                name='organisme'
                                placeholder="Nom de l'oraganisme *"
                                required
                                onChange={this.handleChange} />
                        </fieldset>
                        <fieldset>
                            <label>Personne à contacter <span className='required'>*</span> :</label>
                            <input
                                value={this.state.name}
                                type='text'
                                name='name'
                                placeholder='Personne à contacter *'
                                required
                                onChange={this.handleChange} />
                        </fieldset>
                        <fieldset>
                            <label>E-mail <span className='required'>*</span> :</label>
                            <input
                                value={this.state.email}
                                type='email'
                                name='email'
                                placeholder='E-mail *'
                                pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'

                                required
                                onChange={this.handleChange} />
                        </fieldset>
                        <fieldset>
                            <label>Téléphone:</label>
                            <input
                                value={this.state.phone}
                                type='text'
                                name='phone'
                                pattern="^\+?\s*(\d+\s?){8,}$"
                                placeholder='Téléphone'
                                onChange={this.handleChange} />
                        </fieldset>
                        <fieldset>
                            <label>Nombre de personnes <span className='required'>*</span> :</label>
                            <input
                                value={this.state.numberOfPersons}
                                type='number'
                                name='numberOfPersons'
                                placeholder="Nombre de personnes *"
                                required
                                onChange={this.handleChange} />
                        </fieldset>
                        <fieldset>
                            <label>Budget par personne <span className='required'>*</span> :</label>
                            <input
                                value={this.state.budget}
                                type='text'
                                name='budget'
                                placeholder="Budget par personne *"
                                pattern="^[0-9]*"
                                required
                                onChange={this.handleChange} />
                        </fieldset>
                        <textarea
                            rows='10'
                            value={this.state.message}
                            type='text'
                            name='message'
                            placeholder="Votre méssage"
                            onChange={this.handleChange}>
                        </textarea>
                        <input type='submit' />
                    </form>
                </div>
                <Footer />
            </Fragment >
        )
    }

}