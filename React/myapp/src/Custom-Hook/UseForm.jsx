import React,{useState} from "react";

function UseForm() {

    const [values,setValues]= useState([]);

    function handleChange(e){
       setValues({
        ...values,
        [e.target.name]:e.target.value
       });
    }

    function resetForm(){
        setValues([]);
    }
  return { values,handleChange,resetForm};
}

export default UseForm;