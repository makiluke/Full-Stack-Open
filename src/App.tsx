import { useState, useEffect } from 'react'
import personService from './services/persons'
import Footer from './components/Footer'
import Notification from "./components/Notification";
import React from 'react';

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [addMessage, setAddMessage] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])


    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
            number: newNumber,
        };
        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
                // @ts-ignore
                setAddMessage(`Person ${personObject.name} added successfully.`)
                setTimeout(() => {
                    setAddMessage(null)
                }, 5000)
            })
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    return (
        <div className ="body">
            <h2>Add Person</h2>
            <Notification message={addMessage}/>
            <form onSubmit={addPerson}>
                <input value={newName} onChange={handleNameChange} placeholder="Name" />
                <input value={newNumber} onChange={handleNumberChange} placeholder="Number" />
                <br/>
                <button className="add" type="submit">add</button>
            </form>

            <h2>People</h2>
            <ul>
                {
                    persons.map(person => (
                        <li key={person.name}>{person.name} {person.number}</li>)
                    )
                }
            </ul>
            <Footer />
        </div>
    )
}

export default App