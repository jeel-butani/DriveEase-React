import { useState } from 'react'

import './App.css'
import Navbar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
        <Navbar></Navbar>
        </header>
        <div>
          Hello
        </div>
        
    </>
  );
}

export default App
