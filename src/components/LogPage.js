import React, { Component } from 'react'
import Footer from '../components/Footer'
import SignInForm from '../components/SignInForm'
import LogInForm from '../components/LogInForm'


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
                <Footer />
            </div>
        )
    }
}
// { isLogIn ? <LogInForm /> : null }
// { isSignIn ? <SignInForm /> : null }


