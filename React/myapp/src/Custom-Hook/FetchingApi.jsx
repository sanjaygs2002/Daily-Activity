import React from 'react'
import useFetch from './UseFetch'

function FetchingApi() {
    const {data:users,error,loading}=useFetch("https://jsonplaceholder.typicode.com/todos");
  
    
  return (
    <>
    <ul>
        {
            users.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))
        }
    </ul>
    </>
  )
}

export default FetchingApi