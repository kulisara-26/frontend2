import { useState } from 'react'
import PokemonApplication from './components/PokemonApplication';

import './App.css'

function App() {
  const [show, setShow] = useState(false)

  return (
    <main>
      <button className="btn" onClick ={()=> setShow(!show)}><strong>Start Pokemon App</strong></button>
      
    {show &&
    <PokemonApplication />}


    </main>
  )
}

export default App
