export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });
export const incrementByX = (x) => ({ type: "INCREMENT_BY_X", payload: x });
export const decrementByX = (x) => ({ type: "DECREMENT_BY_X", payload: x });
export const multiplyByX = (x) => ({ type: "MULTIPLY_BY_X", payload: x });
export const divideByX = (x) => ({ type: "DIVIDE_BY_X", payload: x });
