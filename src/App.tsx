import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p className="text-black font-bold">
        Flying Frigate Productions Proudly presents - <span className="text-red-700">Dall-E</span>
      </p>
    </div>
  )
}

export default App
