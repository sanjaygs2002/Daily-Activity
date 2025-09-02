import React from 'react'
import { useState } from 'react';
function Counting() {
    const [state,setState] = useState(0);

  return (
   <>
    <p>Count:{state}</p>
    <button onClick={()=>setState(state+1)}>Increment</button>
   </>
  )
}





export default Counting