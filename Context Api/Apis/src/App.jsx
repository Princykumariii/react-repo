import React from "react"
import "./App.css"
import ChildA from "./Assignment/Components/ChildA"
import ChildB from "./Assignment/Components/ChildB"
import ChildC from "./Assignment/Components/ChildC"
function App(){
  const name="Princy"
  return(
    <div className="App">
     
     <ChildA name ={name}/>
     <ChildB/>
     <ChildC/>
    </div>
  )
}

export default App