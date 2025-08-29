
import React, { useRef } from "react";

const UnControlledForm = () => {
  const nameRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    alert(`Hi my name is ${nameRef.current.value}`);
  };

  return (
    <>
      <form onSubmit={handleChange}>
        <input
          ref={nameRef}
          placeholder="Enter your name in uncontrolled form"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UnControlledForm;