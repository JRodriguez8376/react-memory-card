import { useState } from 'react'

import '../styles/App.css'
import Card from './Card'
import CardList from './CardList'
import PlayArea from './PlayArea';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Memory Game</h1>
    <PlayArea></PlayArea>
    </>
  )
}

export default App
