import React, { Component, Fragment } from 'react'

// Component
import partenaires from '../partenaires/partenaires'

// CSS
import './partenaire.css'



export default class Partenaires extends Component {
    
    render() {
        
        return (
            <Fragment >
                <div className="partenaire-container">
                
                    <p >Ils nous ont  fait confiance :</p>
                    
                    <div className="logo-partenaire">
                    
                        {partenaires.map(partenaire=>{
                    
                            return(
                    
                            <div >
                                <img src={(`logo-partenaires/${partenaire.picture}`)} alt="logo"/>
                            </div>
                            )
                        })}

                    </div>
                
                </div>
            
            </Fragment>
        )
    }
}
