import React from "react";

function ChildC({name}){
    return(
        <div style={{ textAlign:"center",border: "2px solid black", padding: "10px", margin: "20px",background:"yellow" }}>
            <h3>Bottom Main Right Component</h3>
            <p>Name from the top: {name}</p>
           
        </div>
    )
}
export default ChildC