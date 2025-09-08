import React, { useId } from 'react'

function EmailForm() {
    const id = useId();


  return (
    <div>
        <label htmlFor={id}>Email</label>
        <input type='email' id='id' name='email'/>
    </div>
  )
}

export default EmailForm