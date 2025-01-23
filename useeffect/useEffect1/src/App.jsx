import React, { useEffect,useState } from "react";

import { Counter } from "./Components/Lifecycle/Counter";
import { ParentCounter } from "./Components/Lifecycle/ParentCounter";
const App =()	=>{
  return (
		<>
			{/* <Counter/>     */}
       <ParentCounter/>
		</>
	);
}


export default App;