// with and without useMemo

import React, { useState,useMemo, Profiler } from 'react'



function Task2() {
    const [state,setState]=useState(["Apple","Banana","Cherry"]);
    const [input,setInput]= useState(''); 
    const [search, setSearch]= useState('');
    const [sorted, setSorted] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [notify, setNotify]= useState('');

    
// Adding the items
    const handleAddItem=()=>{
        if (input.trim() !== ''){
            setState([...state,input.trim()])
            setInput('');
            setNotify("Item is added");
            setTimeout(()=>setNotify(''),3000);
    }
}

// Removing the items
    const handleRemoveItem=(itemDelete)=>{
            setState(state.filter((item)=>item !== itemDelete));
    }

// Search the item 
    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }

  // Sort the items
  const handleSort=()=>{
     setSorted(!sorted);
  }

//   // filtered the item
//   const filteredItems= state.filter(item => item.toLowerCase().includes(search.toLowerCase()));
  
// // conditional rendered on sorted items
// const displayedItems = sorted ? [...filteredItems].sort((a, b) => a.localeCompare(b)) : filteredItems;



const displayedItems = useMemo(() => {
  const filtered = state.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return sorted ? [...filtered].sort((a, b) => a.localeCompare(b)) : filtered;
}, [state, search, sorted]);




// Edit the Items
const handleEdit=(index)=>{
    setEditIndex(index);
    setEditValue(state[index]);
}

// Save the edited items
const handleSave=()=>{
    const updatedItems=[...state];
    updatedItems[editIndex]=editValue;
    setState(updatedItems);
    setEditIndex(null);
    setNotify("Your item has been updated successfully");
    setTimeout(()=>setNotify(''),3000);
}

  return (
    <div>
         {notify && (
         <div style={{ backgroundColor: '#d4edda', padding: '10px', marginBottom: '10px' }}>
          {notify}
        </div>
      )}
        
    <input type='text'
    placeholder='Add the new Item'
    value={input}
    onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={handleAddItem}> Add Items</button>


        <br></br>


    <input type='text'
    placeholder='Search the items'
    value={search}
    onChange={handleSearch}/>

     <button onClick={handleSort}>
        {sorted ? 'Unsort' : 'Sort A-Z'} 
      </button>
       <br /><br />

        {displayedItems.length>0 ? (
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Items</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedItems.map((item,index)=>{
                        const originalIndex=state.indexOf(item); 
                        return(
                            <tr key={index}>
                                <td>{originalIndex+1}</td>
                                <td>
                                    {editIndex===originalIndex ? (
                                        <input value={editValue}
                                                onChange={(e)=>setEditValue(e.target.value)}/>
                                    ):(
                                        item
                    )}
                                </td>
                                <td>
                                    {editIndex === originalIndex ?(
                                        <>
                                        <button onClick={handleSave}>Save</button>
                                        </>
                                    ):(
                                        <>
                                         <button onClick={()=>handleEdit(originalIndex)}>Edit</button>
                                         <button style={{ color: 'red' }} onClick={() => handleRemoveItem(item)}>Remove</button>
                                        </>
                                       
                                        
                                    )}
                    
                                </td>
                            </tr>

                        )

                    })}
                </tbody>




            </table>
           ):(
            <p>No list found</p>
           )
        }

    </div>
  )
}

export default Task2

