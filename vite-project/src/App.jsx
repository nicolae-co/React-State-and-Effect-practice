import { useState } from 'react'
import WindowTracker from './components/WindowTraker'
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  function toggleShow() {
    setShow(prevState => !prevState)
  }

  return (
    <div className="container">
        <button onClick={toggleShow}>
            Toggle WindowTracker
        </button>
        {show && <WindowTracker />}
    </div>
  )
}

export default App
