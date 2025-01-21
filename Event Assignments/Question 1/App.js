//import React, { useState } from "react/colorselector";

function App() {
  const [selectedColor, setSelectedColor] = React.useState(""); // State to store the selected color
  const [displayColor, setDisplayColor] = React.useState(""); // State to display the selected color

  const handleSelectChange = (event) => {

    setSelectedColor (event.target.value); // Update the selected color
  };

  const handleSubmit = () => {
    setDisplayColor(selectedColor); // Update the display color
  };



  return (
    <div className="button" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Select Your Favorite Color</h1>
      <select value={selectedColor} onChange={handleSelectChange}>
        <option value="" disabled>
          Select a color
        </option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <button
        onClick={handleSubmit}
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        >
        Submit
      </button>
      
      {displayColor && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          You selected: <strong>{displayColor}</strong>
        </p>
      )}
    </div>

    
  );
}



//export default ColorSelector;

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
