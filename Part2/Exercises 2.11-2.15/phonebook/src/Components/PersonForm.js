import React from 'react'

const PersonForm = ({ addName, handleNameChange, handlePhoneChange }) => {
    return (
        <form onSubmit={ addName }>
            <div>
                name:
                <input onChange={ handleNameChange}/>
            </div>
            <div>
                number:
                <input onChange={ handlePhoneChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm