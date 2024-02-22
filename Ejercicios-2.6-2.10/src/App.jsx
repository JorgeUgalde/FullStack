import React, { useState } from 'react'
import Person from './Components/Person'
import Filter from './Components/Filter'
import PersonsForm from './Components/PersonsForm'
import Persons from './Components/Persons'



const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }


    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filterPerson = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))


  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonsForm handlePersonChange={handlePersonChange} newName={newName} addPerson={addPerson} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons filterPerson={filterPerson} />

    </div>
  )

  // return (
  //   <div>
  //     <h2>Phonebook</h2>
  //     <div>

  //       Filter shown with <input value={filter}
  //         onChange={handleFilterChange} />
  //     </div>

  //     <form onSubmit={addPerson}>
  //       <div>
  //         name: <input value={newName}
  //           onChange={handlePersonChange} />
  //       </div>
  //       <div>
  //         number: <input value={newNumber}
  //           onChange={handleNumberChange} />
  //       </div>
  //       <div>
  //         <button type="submit">add</button>
  //       </div>
  //     </form>

  //     <h2>Numbers</h2>
  //     <ul>
  //       {filterPerson.map(person =>
  //         <Person key={person.name} person={person} />
  //       )}
  //     </ul>

  //   </div>
  // )
}

export default App