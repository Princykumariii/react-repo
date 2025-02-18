import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByX, decrementByX, multiplyByX, divideByX } from "../actions/actions";

function CounterApp() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> {count}</h1>

      
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

     
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          placeholder="Enter a number"
        />
      </div>

      
      <button onClick={() => dispatch(incrementByX(inputValue))}>+X</button>
      <button onClick={() => dispatch(decrementByX(inputValue))}>-X</button>
      <button onClick={() => dispatch(multiplyByX(inputValue))}>×X</button>
      <button onClick={() => dispatch(divideByX(inputValue))}>÷X</button>
    </div>
  );
}

export default CounterApp;
