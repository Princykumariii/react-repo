// import React, { useState } from "react";

// const Counter = () => {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<div>
// 			<h1>Counter</h1>
// 			<p data-testid="count">{count}</p>
// 			<button data-testid="inc_btn" onClick={() => setCount(count + 1)}>
// 				Inc
// 			</button>
// 			<button
// 				data-testid="dec_btn"
// 				onClick={() => setCount(count - 1)}
// 				disabled={count == 0}
// 			>
// 				Dec
// 			</button>
// 			<button onClick={() => setCount(0)}>Reset</button>
// 		</div>
// 	);
// };

// export default Counter;


import React, { useState } from "react";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
      <button onClick={() => setCount(initialValue)}>Reset</button>
    </div>
  );
};

export default Counter;
