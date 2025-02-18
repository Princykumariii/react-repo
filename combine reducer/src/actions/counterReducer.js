const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT_BY_X":
      return { count: state.count + action.payload };
    case "DECREMENT_BY_X":
      return { count: state.count - action.payload };
    case "MULTIPLY_BY_X":
      return { count: state.count * action.payload };
    case "DIVIDE_BY_X":
      if (action.payload === 0) {
        alert("⚠ Cannot divide by zero!");
        return state;
      }
      return { count: state.count / action.payload };
    default:
      return state;
  }
}

export default counterReducer;
