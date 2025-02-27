import React from "react";
import Counter from "./components/Counter"
const App = ()=>{
  return(
    <div>
      <h2>Simple Counter App</h2>
      <Counter initialValue={5} />
    </div>
  )
}
export default App;


