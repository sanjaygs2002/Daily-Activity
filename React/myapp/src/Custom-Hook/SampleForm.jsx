import UseForm from './UseForm'


function SampleForm() {
    const {values,handleChange,resetForm}= UseForm({name:"",email:""});

    function handleSubmit(e){
      e.preventDefault();
      console.log(values);
      resetForm();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={values.name} onChange={handleChange}/>
        <br></br>
        <input type='email' name='email' value={values.email} onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SampleForm