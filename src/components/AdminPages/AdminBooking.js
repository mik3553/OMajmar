import React , {Component} from 'react'
import './Admin.css'


export default class AdminBooking extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isDelete : null
        }
    }

    render() {
        const {details} = this.props
        const handleDelete = () => {
            const idTodelete = JSON.stringify({
                _id: details._id
            })
            const options = {
                method: 'DELETE',
                body: idTodelete,
                headers: { 'Content-Type': 'application/json' }
            }
            fetch('https://omajmar-server.herokuapp.com/booking', options)
            this.setState({isDelete:true})
        }
        const {isDelete} = this.state
        return (
            <table 
                style={{display : isDelete ? 'none' : null }}
                className='adminBooking'>
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
                    <tr style={{ backgroundColor: 'azure' }}>
                        <td colSpan='2'>
                            {details.message}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <button
                                onClick={handleDelete}
                                style={{ backgroundColor: 'red', width: '100%' }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}
