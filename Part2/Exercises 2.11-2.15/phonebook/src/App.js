import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState('')

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response =>{
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  console.log('before loading');

  const peopleToShow = showAll === '' 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))

  const addName = (event) => {
  event.preventDefault()

  const nameObject = {
    name:newName,
    number:newPhone,
    id: persons.length + 1,
    date: new Date().toISOString(),
   }
  
  persons.forEach(function(item, index, array) {
    if(persons[index].name === newName){
      alert(`${newName} is already added to phonebook`)
    } else 
    {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewPhone('')
    }
    }) 
      }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setShowAll(event.target.value)
  }
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  handleFilterChange={handleFilterChange}/>  
      <PersonForm addName={addName} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons  persons={ peopleToShow }/>
    </div>
  ) 
}

export default App