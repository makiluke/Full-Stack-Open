import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'
import React from 'react'
import './index.css'


axios.get('http://localhost:3001/persons').then( () => {
    // @ts-expect-error expected
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)
})
