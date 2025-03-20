import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BKK from './BKK'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1 className='bg-red-500'>this is bibek</h1>
      <BKK />
    </>
  )
}

export default App
