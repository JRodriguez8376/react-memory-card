import { useState } from 'react'

import '../styles/App.css'
import Card from './Card'
import CardList from './CardList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Memory Game</h1>
     <CardList />
    </>
  )
}

export default App
