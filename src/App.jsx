import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
    // console.log(puppies)
  const [featPupId, setFeatPupId] = useState(null)
  // console.log(featPupId)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)

   return (
    <>
      <div className="App">
        <h1>Puppy Pal - Workshop</h1>
        {puppies.map((puppy) => {
          return <p key={puppy.id} onClick={() => {
            setFeatPupId(puppy.id)
            // const featuredPup = puppies.find((pup) => pup.id === featPupId)
            // console.log(featuredPup)
          }}>{puppy.name}</p>
        })}
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>

        )
        }
      </div>
    </>
  )
}

export default App
