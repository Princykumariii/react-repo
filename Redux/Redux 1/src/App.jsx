// import React, { useState } from "react";
// import { legacy_createStore as createStore } from "redux";
// import CounterApp from "./Components/CounterApp"
// import "./App.css";
// import { INC_COUNT, DEC_COUNT } from "./actions";
// import { store } from "./store";
// import Name from "./Name";
// import Counter from "./Counter";

//1️⃣ create action constants
// const INC_COUNT = "INC_COUNT";
// const DEC_COUNT = "DEC_COUNT";

// // // reducer
//  const initState = 10;
// const reducerFn = (state = initState, action) => {
// 	// console.log(state, action, "redcer funtion");
// 	switch (action.type) {
// 		case INC_COUNT:
// 			return state + 1;
// 		case DEC_COUNT:
// 			return state - 1;
// 		default:
// 			return state;
// 	}
//  };
// Create a store
// createStore given by redux
// const store = createStore(reducerFn);
// // console.log(store)
import React from "react";
import CounterApp from "./Components/CounterApp";
import "./App.css"
const App = () => {
	
	// const [count, setCount] = useState(store.getState());
	// console.log(store.getState()); // {count:0}
	// //store provided by redux
	// //
	// store.subscribe(() => {
	// 	setCount(store.getState());
	// });
	// // console.log(count, "in app compo");
	return (
		<div>
			{/* <h1>{count}</h1>
			<button onClick={()=>store.dispatch({type:INC_COUNT})}>Inc</button>
			<button onClick={()=>store.dispatch({type:DEC_COUNT})}>Dec</button> */}
			{/* <Counter /> */}
			{/* <Name /> */}
			<CounterApp/>
		</div>
	);
};

export default App;

// getState()=>
// dispatch(actionObj) =>
// subscribe