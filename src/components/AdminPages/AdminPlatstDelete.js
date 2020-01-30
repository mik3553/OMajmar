import React from 'react'
import './Admin.css'


const AdminPlatstDelete = ({ details }) => {
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
        fetch('https://omajmar-server.herokuapp.com/plat', options)

    }
    return (
        <div className='adminProducts'>
            <p style={{ color: 'black' }}>{details.title}</p>
            <button
                onClick={handleDelete}
                style={{ backgroundColor: 'red', display: 'block' }}>
                delete
            </button>
        </div>
    )
}

export default AdminPlatstDelete