import React, { Component, Fragment } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import AdminFormEntree from './AdminFormEntree'
import AdminFormPlat from './AdminFormPlat'
import AdminFormDessert from './AdminFormDessert'

import AdminEntreestDelete from './AdminEntreestDelete'
import AdminDessertstDelete from './AdminDessertstDelete'
import AdminPlatsDelete from './AdminPlatstDelete'

import AdminBooking from './AdminBooking'
import LoginForm from '../LogInForm'

import './Admin.css'


export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
             bookings:[],
             entrees:[],
             plats:[],
             desserts:[],
             isAdmin : false
        }
    }

    componentDidMount(){
            this.getBookings()
            this.getEntrees()
            this.getPlats()
            this.getDesserts()
    }
    getEntrees = () => {
        fetch('http://localhost:3050/entrees')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((response) => {
                            this.setState({ entrees: response })
                        })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getPlats = () => {
        fetch('http://localhost:3050/plats')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((response) => {
                            this.setState({ plats: response })
                        })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getDesserts = () => {
        fetch('http://localhost:3050/desserts')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((response) => {
                            this.setState({ desserts: response })
                        })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getBookings(){
        fetch('http://localhost:3050/bookings')
        .then(response => {
            response.json()
            .then(response =>{
                this.setState({bookings : response})
            })
            .catch((error) => {
                console.log(error);
            }) 
        })
    }
    getAuthenticated(){
        this.setState({isAdmin:true})
    }
    //URGENT A REVOIR SI SESSIONS UTILISATEUR MARCHE
    logOut(){
        this.setState({ isAdmin: false })
    }
    
    render() {
        if (!this.state.isAdmin){
            return  <section className='adminLogIn'>
                        <LoginForm 
                            isAuthenticated={()=>this.getAuthenticated()}/>
                    </section>
        }

        const entrees = [...this.state.entrees]
            .map(entree =>
                <AdminEntreestDelete
                    key={entree._id}
                    details={entree}
                />)
        const plats = [...this.state.plats]
            .map(plat =>
                <AdminPlatsDelete
                    key={plat._id}
                    details={plat}
                />)
        const desserts = [...this.state.desserts]
            .map(dessert =>
                <AdminDessertstDelete
                    key={dessert._id}
                    details={dessert}
                />)

        const bookings = this.state.bookings
            .map(booking =>
                (
                    <AdminBooking
                        key={booking._id}
                        details={booking}
                    />
                )
            )
        return (
            <Fragment>
                <Header />
                <section className='admin'>
                        {/* <button onClick={this.logOut} >Déconnexion</button> */}
                    <div className='adminForms' >
                        <AdminFormEntree />
                        <AdminFormPlat />
                        <AdminFormDessert />
                    </div>
                    <article className='adminCarte'>
                        <div className='adminProduct'>
                            {entrees}
                        </div>
                        <div className='adminProduct'>
                            {plats}
                        </div>
                        <div className='adminProduct'>
                            {desserts}
                        </div>
                    </article>
                    <article>
                        <h2>Message clients</h2>
                        <div className='bookingsBox'>
                            {bookings}
                        </div>
                    </article>
                </section>
                <Footer />
            </Fragment>
        )
    }
}

