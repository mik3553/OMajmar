import React, { Component, Fragment } from 'react'
import Header from "./Header";
import Footer from '../components/Footer'
import SignInForm from '../components/SignInForm'
import LogInForm from '../components/LogInForm'

import './LogPage.css'


export default class LogPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
             isSignIn : false,
             isLogIn : false
        }
        this.handelShowLogForm  = this.handelShowLogForm.bind(this)
        this.handelShowSignForm = this.handelShowSignForm.bind(this)
    }
    handelShowLogForm = () => {
        this.setState({ isLogIn: true, isSignIn: false})
    }
    handelShowSignForm = () => {
        this.setState({ isSignIn: true, isLogIn: false})
    }
    
    render() {

        let logIn = null
        let signIn = <SignInForm />
        const {isLogIn, isSignIn} = this.state
        if (isLogIn){
            logIn= <LogInForm />
            signIn = null
        }
        if (isSignIn) {
            logIn = null
            signIn = <SignInForm />
        }

        return (
            <Fragment>
                <Header />
                <div className='logpage'>
                    <div className='logButton'>
                        <button 
                            style = { { backgroundColor: logIn ? 'orange' : 'white'} }
                            onClick={this.handelShowLogForm} >
                                Se connecter
                        </button>
                        <button 
                            style={{ backgroundColor: signIn ? 'orange' : 'white' }}
                            onClick={this.handelShowSignForm}>
                                Créer un compte
                        </button>
                    </div>
                    {signIn}
                    {logIn}
                </div>
                <Footer />
            </Fragment>
        )
    }
}
// { isLogIn ? <LogInForm /> : null }
// { isSignIn ? <SignInForm /> : null }


