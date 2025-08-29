import React, { useEffect, useState } from 'react'
import axios from 'axios';


function DataFetch() {
    const [state,setState]= useState([]);
// Get Request
    useEffect(()=>{
       
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                const ans= res.data;
                setState(ans);
            }).catch((err)=>{
                console.log(err);    
            })
        
    },[])

// Post Request 

    useEffect(()=>{
        axios.post("https://jsonplaceholder.typicode.com/users",{
            
            name:"Sanjay",
            email:"sanjay.gs2020cse@sece.ac.in"
        }).then((res)=>{
            setState((prev)=> ([...prev, res.data]));
        })
    },[])

// put

  useEffect(()=>{
    axios.put("https://jsonplaceholder.typicode.com/users/2",{
        name:"Updated name",
    }).then((res)=>{
        setState((prev)=>prev.map((user) => user.id === 2 ? res.data : user));
    })
  },[])

  // patch

useEffect(()=>{
    axios.patch("https://jsonplaceholder.typicode.com/users/1",{
       
        name:"Sanjay G S"
    }).then((res)=>{
        setState((prev)=> prev.map((user) => user.id === 1 ? { ...user, ...res.data } : user))
    })
},[])

// Delete
useEffect(()=>{
    axios.delete("https://jsonplaceholder.typicode.com/users/4")
    .then(()=>{
        setState((prev)=> prev.filter((user)=>user.id !==4));
    })
},[])

  return (
    <>
       {state.map((item, index) => (
  <li key={`${item.id}-${index}`}>{item.name}</li>
))
    }
    </>
  )
}

export default DataFetch