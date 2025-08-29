import React, { useState } from "react";

const ControllerForm = () => {
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name is ${state}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={state}
          placeholder="Enter your name"
          type="text"
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControllerForm;
