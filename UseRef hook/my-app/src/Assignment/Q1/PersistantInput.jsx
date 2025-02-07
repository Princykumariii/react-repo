import { useRef, useState } from "react";

const PersistentInput = () => {
  const inputRef = useRef(null); 
  const lastTypedValue = useRef(""); 
  const [displayedValue, setDisplayedValue] = useState(""); 

  const handleSave = () => {
    lastTypedValue.current = inputRef.current.value; 
    setDisplayedValue(lastTypedValue.current); 
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px",backgroundColor:"yellowgreen" }}>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleSave} style={{ marginLeft: "10px",backgroundColor:"Blue",color:"white" }}>
        Save
      </button>
      <p>Last Typed Value: {displayedValue}</p>
    </div>
  );
};

export default PersistentInput;
