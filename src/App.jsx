import { useState } from 'react'
import './App.css'
import MainDataSteps from './components/MainDataSteps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainDataSteps />
    </>
  )
}

export default App
