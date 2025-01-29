import React from "react";
import ChildB from "./ChildB"
function ChildA({name}){
    return(
        <div style={{textAlign:"center",padding:"20px"}}>
            <h1>props Drilling example</h1>
            <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setUserName(e.target.value)}
      />
            <ChildB name = {name}/>
        </div>
    )
}
export default ChildA