import { useReducer, useState } from "react";

const initialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};

const ToDoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: task });
      setTask("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px",backgroundColor:"yellow" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "10px" ,backgroundColor:"blueviolet",color:"white"}}>
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0,backgroundColor:"blueviolet" }}>
        {state.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginTop: "10px",
            }}
          >
            {task.text}
            <button
              onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
              style={{ marginLeft: "10px" }}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
