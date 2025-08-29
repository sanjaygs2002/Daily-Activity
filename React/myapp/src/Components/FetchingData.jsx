import React, { useEffect, useState } from 'react'

function FetchingData() {
    const [state,setState]= useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const data = await fetch("https://jsonplaceholder.typicode.com/users");
                const res = await data.json();
                setState(res);
            }catch(err){
                console.log(err);
                
            }
        }
        fetchData();
    },[])
  return (
    <>
    <ul>
        {state.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
    </>
  )
}

export default FetchingData;