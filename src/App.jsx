import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div 
    style={{
      display:"flex",
      flexDirection:"column",
      gap:"20px"
    }}
    >
      <div>
        <h1>Counter App</h1>
        <span>Count: {count}</span>
      </div>
      <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App