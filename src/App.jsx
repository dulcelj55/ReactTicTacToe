import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Player from './Components/Player'
import Board from './Components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Player whichPlayer = 'X'/>
      <Player whichPlayer = 'O'/>
      <Board/>
    </>
  )
}

export default App
