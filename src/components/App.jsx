import { useState } from 'react'

import '../styles/App.css'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Memory Game</h1>
     <Card></Card>
    </>
  )
}

export default App
