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

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Form() {
  const [state, setState] = useState("");

  const names = "Kodis";
  console.log(names);

  const handleChange = () => {
    alert(`Hi my is ${state}`);
  };
  return (
    <div>
      <p>Name is : {state}</p>
      <form onSubmit={handleChange}>
        {/* <input type="text"
        placeholder='Enter the name' 
        onChange={(e)=>setState(e.target.value)}/> */}

        <TextField
          variant="standard"
          placeholder="Enter the name"
          onChange={(e) => setState(e.target.value)}
        />

        <TextField
          variant="outlined"
          placeholder="Enter the name"
          onChange={(e) => setState(e.target.value)}
        />

          <button aria-label="Close modal">Close modal</button>
          <span aria-hidden="true">★</span>
        <TextField
          variant="filled"
          placeholder="Enter the name"
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit">Submit</button>

        <Button variant="text">Text Submit</Button>
        <br></br>

        <Button variant="contained">Contained Submit</Button>
        <br></br>
        <Button variant="outlined">OutLined Button</Button>
        <br></br>
      </form>
    </div>
  );
}

export default Form;
