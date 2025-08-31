// import React, { useRef } from 'react'

// function Form() {
//     const inputRef= useRef();

//     const handleChange=()=>{
//         alert(`Hi my name is ${inputRef.current.value}`);
//     }

//   return (
//     <>
//     <form onSubmit={handleChange}>
//         <input type='text'
//         ref={inputRef}/>
        
//         <button type='submit'>Submit</button>
//     </form>
//     </>
//   )
// }

// export default Form

import React, { useState } from 'react'

function Form() {

    const [state,setState]= useState("");

    const handleChange=()=>{
        alert(`Hi my is ${state}`);
    }
  return (
    <div>
        <p>Name is : {state}</p>
        <form onSubmit={handleChange}>
        <input type="text"
        placeholder='Enter the name' 
        onChange={(e)=>setState(e.target.value)}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form