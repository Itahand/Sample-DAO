import { useState, useEffect } from 'react'
import {
  unauthenticate,
  logIn,
  signUp,
  signGuestbook
} from "./Flow/actions.js";
import './App.css'


function App() {
  const [user, setUser] = useState();


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => logIn()}>
          Logged Account Address:
        </button>
      </div>
    </div >
  )
}

export default App
