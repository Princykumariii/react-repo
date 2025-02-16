import React ,{useState}from "react";
import {store} from "./store";
import {SET_NAME} from "./actions"
const Name =()=>{
    const[input,setInput]=useState("");
    const[name,setName]=useState("");
    return(
        <div>
           <input type="text" placeholder="Enter name" onChange={(e)=>{e.target.value}}/>
           <button onClick={()=>store.dispatch({type:DEC_COUNT})}>DEC</button>
        </div>
    )
}
export default Name;
