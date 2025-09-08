import { useForm } from "react-hook-form";


function UseForm() {
    const {register,handleSubmit,reset,formState:{errors}} = useForm();

    function onSubmit(data){
        console.log("data",data);
        reset();
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name",{required:"Name is required"})} placeholder='Enter the name'/>
            {errors.name && <p>{errors.name.message}</p>}
            <button type='submit'>Submit</button>
        </form>
    </div>

  )
}

export default UseForm