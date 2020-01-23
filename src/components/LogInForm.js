
import React, { Component, Fragment } from 'react'

export default class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
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
            email: this.state.email,
            password: this.state.password
        })
        const options = {
            method: 'POST',
            body: post,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:3050/user', options)
            .then(async response => {
                if (response.ok) {
                    const data = await response.json()
                    if (data.isAdmin) {
                        //qui vaut true si bons identifiants
                        this.props.isAuthenticated()
                        // this.setState({ isAuthenticated : true})
                        // console.log(this.state.isAuthenticated)
                    }
                    else {
                        console.log('error auth')
                    }

                } else {
                    console.error('server response : ' + response.status);
                }
            }).catch(error => {
                console.error(error);
            });

        const logUser = { ...this.state }
        // console.log(logUser)
        Object.keys(logUser)
            .forEach(input => {
                logUser[input] = ''
            })
        this.setState({ ...logUser })
    }

    render() {
        return (
            <Fragment>
                <h2>Formulaire de connexion</h2>
                <form className='signIn' onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label>Email:</label>
                        <input
                            type='email'
                            name='email'
                            onChange={this.handleChange}
                            placeholder='email' />
                    </fieldset>
                    <fieldset>
                        <label>Mot de passe:</label>
                        <input
                            type='password'
                            name='password'
                            onChange={this.handleChange}
                            placeholder='Mot de passe' />
                    </fieldset>
                    <input type='submit' />
                </form>
            </Fragment>
        )
    }
}