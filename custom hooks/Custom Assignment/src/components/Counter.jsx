import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', background:"pink",color:"blue" }}>
      <h1>Counter: {count}</h1>
      
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br /><br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
      </div>

  );
};

export default Counter;