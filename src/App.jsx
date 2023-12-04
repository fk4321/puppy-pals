import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
    console.log(puppies)
  return (
    <>
      <div className="App">
        <h1>Puppy Pal - Workshop</h1>
        {puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })}
      </div>
    </>
  )
}

export default App
