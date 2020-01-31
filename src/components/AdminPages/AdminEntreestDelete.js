import React, { Component } from 'react'
import './Admin.css'

export default class AdminEntreestDelete extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isDelete: null
        }
    }


    render() {

        const isDelete = this.state.isDelete
        const details = this.props.details
        const handleDelete = () => {
            const idTodelete = JSON.stringify({
                _id: details._id,
            })
            const options = {
                method: 'DELETE',
                body: idTodelete,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch('https://omajmar-server.herokuapp.com/entree', options)
            this.setState({ isDelete: true })
        }
        return (
            <div className='adminProducts' style={{ display: isDelete ? 'none' : null }}>
                <p style={{ color: 'black' }}>{details.title}</p>
                <button
                    onClick={handleDelete}
                    style={{ backgroundColor: 'red', display: 'block' }}>
                    delete
                </button>
            </div>
        )
    }
}