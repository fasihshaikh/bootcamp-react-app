import React, {useState} from 'react';
import {Message} from "./message.js";
import './App.css';
import Dinner from './dinner.js';

function App() {
  
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true)

  return (
    <div className={`box ${isMorning ? 'dayLight': ''}`}>
    <Message counter={count}/>
      <h2>Daytime = {isMorning ? 'Morning' : 'Night'}</h2>
      <Dinner/>
      
       <button onClick={()=> setCount(++count)}>Update Counter </button>
       <button onClick={()=> setCount(0)}>Reset </button>
       <button onClick={()=>setMorning(!isMorning)}>Update day </button>
    </div>
  );
}

export default App;