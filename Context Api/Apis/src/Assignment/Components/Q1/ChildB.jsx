import React from "react";
import ChildC from "../ChildC";
function ChildB({name}){
    return(
        <div style={{ textAlign:"center",border: "2px solid black", padding: "10px", margin: "20px",background:"yellow" }}>
            <h2>Middle Component</h2>
            <ChildC name={name}/>
        </div>
    )
}

export default ChildB