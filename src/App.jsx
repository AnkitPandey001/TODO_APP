import React, { useState } from 'react'
import ToDoList from './ToDoList';

const App = () => {

    const [inputList,setInputList]=useState("");

   const[items,setItems]=useState([]);

    const itemEvent = (event) =>{
       setInputList(event.target.value)
    };

    const listOfItem = () =>{
        setItems((olditems) => {
            return [...olditems,inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) =>{
          setItems((olditems)=>{
            return olditems.filter((arrElement,index)=>{
                    return index!==id ;
            });
          });
    };

  return (
    <div className='main_div'>
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type='text' placeholder='Add a Items'
        onChange={itemEvent} value={inputList}
        />
        <button onClick={listOfItem}> + </button>
        <ol>
              {
                items.map( (itemval,index) =>{
                  return <ToDoList
                  key={index}
                  text = {itemval}
                  id={index}
                  onSelect={deleteItems}
                />
                })
              }
        </ol>
      </div>
    </div>
  )
}
 export default App;