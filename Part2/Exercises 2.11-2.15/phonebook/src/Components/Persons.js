import React from 'react'
import Person from './Person'

const Persons = ({ persons }) => {
    const eachPerson = persons.map((e) => {
        return (
            <Person
                key= { e.id }
                person={ e }
              />
        )
    });

    return (
        <ul>
            { eachPerson }
        </ul>
    )
}

export default Persons