import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('before: ', persons)

    const nameObj = { name: newName }
    const filtered = persons.filter(person => person.name === nameObj.name)
    if (filtered.length > 0) {
      alert(`${newName} is already added in the phonebook`)
      setNewName('')
    }
    else {
      setPersons(persons.concat(nameObj))
      setNewName('')
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App