import React from 'react'
import './Admin.css'


const AdminDessertstDelete = ({ details }) => {

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
        fetch('https://omajmar-server.herokuapp.com/dessert', options)
    }
    return (

        <div
            style={{ textDecoration:  handleDelete ? " line-through" : 'none'}}
            className='adminProducts'>
            <p style={{ color: 'black' }}>{details.title}</p>
            <button
                onClick={handleDelete}
                style={{ backgroundColor: 'red', display: 'block' }}>
                delete
            </button>
        </div>
    )
}

export default AdminDessertstDelete