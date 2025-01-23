import { useState } from "react";
import { Counter } from "./Counter";

export const ParentCounter =()=>{
    const[showCounter,setShowCounter]=useState(true)
    return(
        <>
        {showCounter &&<Counter/>}
        <button onClick={()=>setShowCounter(!showCounter)}>{showCounter ?"Hide":"Show"}</button>
        </>
    )
}