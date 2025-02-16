import React from "react"
function createStore(reducer, initialState) {
    let state = initialState;
    let listeners = [];
  
    return {

      getState: () => state,
      dispatch: (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
      },
      subscribe: (listener) => {
        listeners.push(listener);
        return () => {
          listeners = listeners.filter((l) => l !== listener);
        };
      },
    };
  }
  
  // Reducer Function
  function counterReducer(state, action) {
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
          alert("Cannot divide by zero!");
          return state;
        }
        return { count: Math.floor(state.count / action.payload) };
      default:
        return state;
    }
  }
  
  // Initialize store
  const store = createStore(counterReducer, { count: 0 });
  
  // React Component
  function CounterApp() {
    const [count, setCount] = React.useState(store.getState().count);
    const [inputValue, setInputValue] = React.useState(1);
  
    React.useEffect(() => {
      const unsubscribe = store.subscribe(() => setCount(store.getState().count));
      return unsubscribe;
    }, []);
  
    return (
      <div className="app-container">
        <h1>Counter: {count}</h1>
        <button onClick={() => store.dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => store.dispatch({ type: "DECREMENT" })}>-1</button>
        <br /><br />
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button onClick={() => store.dispatch({ type: "INCREMENT_BY_X", payload: inputValue })}>
          +{inputValue}
        </button>
        <button onClick={() => store.dispatch({ type: "DECREMENT_BY_X", payload: inputValue })}>
          -{inputValue}
        </button>
        <button onClick={() => store.dispatch({ type: "MULTIPLY_BY_X", payload: inputValue })}>
          ×{inputValue}
        </button>
        <button onClick={() => store.dispatch({ type: "DIVIDE_BY_X", payload: inputValue })}>
          ÷{inputValue}
        </button>
      </div>
    );
  }
  export default CounterApp

  
  