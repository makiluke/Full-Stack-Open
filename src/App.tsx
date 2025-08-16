import { useState } from 'react'
import {forEach} from "mathjs";
import type { JSX } from 'react/jsx-runtime';


const Person = (props: { name: string, number: string}) => {
    return <li>{props.name} {props.number}</li>
}


const Persons = (
    props: { persons: any, filter: string }
) => {
    const personsToShow =
        props.persons.filter(
            person => person.name.toLowerCase().includes(
                props.filter.toLowerCase())
        );
    return (
        <ul>
            {personsToShow.map(
                (person: { name: string; number:any }) => (
            <Person key={person.name} name={person.name} number={person.number}/>
            ))
            }
        </ul>
    );
};

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas',
        number: '39-44-5323523'}
    ])

    /* new Name controls the form input element
    /* when we modify the text this changes newName
    /* when we add Name using button this uses most recent name
     */
    const [newName, setNewName] = useState('Name')
    const [newNumber, setNewNumber] = useState('Number')
    const [filter, setFilter] = useState('All')


    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            important: Math.random() > 0.5,
            id: String(persons.length + 1)
        }
        if (persons.some(person => person.name === nameObject.name)) {
            alert(`${nameObject.name} already in persons`)
        }
        else {
            setPersons(persons.concat(nameObject))
            setNewName('')
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <input value={filter} onChange={handleFilterChange}/></form>
            <button type="submit">add</button>
            <h2>add a new</h2>
            <form onSubmit = {addName}>
                <input value ={newName} onChange={handleNameChange}/>
                <input value ={newNumber} onChange={handleNumberChange}/>
                <button type="submit">add</button>
            </form>
            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}

export default App