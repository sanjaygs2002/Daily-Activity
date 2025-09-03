import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./CounterSlice";


const Counter=()=>{
         // const count = useSelector((state) => state.counter.value);
         const dispatch = useDispatch();

         return (
            <>
            <h1>Count:{useSelector((state) => state.counter.value)}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>

            </>
         )
}

export default Counter;