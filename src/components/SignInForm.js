import React, { Component, Fragment } from 'react'

export default class SignInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName :'',
            lastName  :'',
            email     :'',
            address   :'',
            password  :'',
            passwordC :''
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name] : value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const password = this.state.password
        const passwordC = this.state.passwordC
        if(this.checkPassword(this.state.password) && password === passwordC){

            const newUser = { ...this.state }
            console.log(newUser)
            Object.keys(newUser)
                .forEach(input => {
                    newUser[input] = ''
                })
            this.setState({...newUser })
        }
    }
    checkPassword = (password) => {
        let passwordRegex = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$/
        if (!passwordRegex.test(password)){
            return false
        }
        else{
            return true
        }
    }
    checkEmail = (email) => {
        let mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!mailRegex.test(email)){
            return false
        }
        else {
            return true
        }
    }
    
    render() {

        const goodPassword = this.checkPassword(this.state.password)
        
        
        // const goodEmail = this.checkEmail(this.state.email)
        // let emailAlert = null
        // { !goodEmail ? emailAlert = <p className='alert'>Votre email n'est pas au bon format</p> : emailAlert = true }

        let alertConfirmPassword = null
        if(this.state.password !== this.state.passwordC){
            alertConfirmPassword = <p className='alert'>Veuillez confirmer confirmer votre mot de passe</p>
        }

        return (
            <Fragment>
                <h2>Formulaire d'inscription</h2>
                <form className='signUp' onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label>Prénom:</label>
                        <input  
                            value={this.state.firstName}
                            type='text'
                            name='firstName'
                            placeholder='Prénom'
                            required 
                            onChange={this.handleChange}/>
                    </fieldset>
                    <fieldset>
                        <label>Nom:</label>
                        <input  
                            value={this.state.lastName}
                            type='text' 
                            name='lastName' 
                            placeholder='Nom'
                            required 
                            onChange={this.handleChange}/>
                    </fieldset>
                    <fieldset>
                        <label>E-mail:</label>
                        <input  
                            value={this.state.email} 
                            type='email' 
                            name='email' 
                            placeholder='E-mail'
                            required 
                            onChange={this.handleChange}/>
                        {/* {emailAlert} */}
                    </fieldset>                    
                    <fieldset>
                        <label>Adresse:</label>
                        <input  
                            value={this.state.address} 
                            type='text' 
                            name='address' 
                            placeholder='Adresse'
                            required 
                            onChange={this.handleChange}/>
                    </fieldset>                    <fieldset>
                        <label>Mot de passe:</label>
                        <input  
                            value={this.state.password} 
                            type='password' 
                            name='password' 
                            placeholder='Mot de passe'
                            required 
                            onChange={this.handleChange}/>
                        {!goodPassword ? <p className='alert' >Le mot de passe doit être de 8 caractères minimum et contenir au moins 1 majuscule, 1 miniscule et 1 chiffre</p> : <p className='green'>Mot de passe valide</p> }
                    </fieldset>
                    <fieldset>
                        <label>Confirmer mot de passe:</label>
                        <input  
                            value={this.state.passwordC} 
                            type='password' 
                            name='passwordC' 
                            placeholder='Confirmer mot de passe'
                            required 
                            onChange={this.handleChange}/>
                    </fieldset>
                    {alertConfirmPassword}
                    <input type='submit' />
                </form>
            </Fragment>
        )
    }
