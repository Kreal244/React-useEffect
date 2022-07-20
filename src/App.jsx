import React, { useState } from 'react'
import Content from './Component/Cotent'


function App() {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div style={{margin:100}}>
      <button onClick={handleClick} >Toggle</button>
      {show&&<Content/>}
    </div>
    
  )
}

export default App