import React from 'react'
import './Admin.css'


const AdminBooking= ({details}) =>{


    return (
       
            <table className='adminBooking'>
                <tbody>
                    <tr>
                        <td>
                            Date et heur du message
                        </td>
                        <td>
                            {details.date}
                        </td>
                    </tr>
                    <tr>
                        <td>Nom de l'organiseme</td>
                        <td>{details.organization}</td>
                    </tr>
                    <tr>
                        <td>Personne à contacter</td>
                        <td>{details.personToContact}</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td>{details.email}</td>
                    </tr>
                    <tr>
                        <td>Télephone</td>
                        <td>{details.phone}</td>
                    </tr>
                    <tr>
                        <td>Nombre de personne</td>
                        <td>{details.numberOfPersons}</td>
                    </tr>
                    <tr>
                        <td>Budget par personne</td>
                        <td>{details.budget} €</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr style={{backgroundColor:'azure'}}>
                        <td colSpan='2'>
                            {details.message}
                        </td>
                    </tr>
                </tfoot>
            </table>
    )
}

export default AdminBooking
