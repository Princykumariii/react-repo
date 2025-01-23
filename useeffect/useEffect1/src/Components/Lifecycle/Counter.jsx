
import  { useState, useEffect } from 'react';

 export const Counter=() =>{
  const [count, setCount] = useState(0);

 
  useEffect(() => {
    console.log("Component Mounted");
    return()=>{
        console.log("I will be logged when the component unmouts"); 
    }
  },[])

  useEffect(()=>{
    console.log("Component unMounted")
    return()=>{
        console.log("useEffect Hook")
        
    }
  },[count]);

    
  return (
    <div>
      <p> Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

  


