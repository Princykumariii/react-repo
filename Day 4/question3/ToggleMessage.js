import React, { useState } from "react";

const ToggleMessage = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const toggleMessage = () => {
    setIsMessageVisible((prevState) => !prevState);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={toggleMessage}>
        {isMessageVisible ? "Hide" : "Show"}
      </button>
      {isMessageVisible && (
        <p style={{ marginTop: "10px" }}>
          Hello, welcome to React state management!
        </p>
      )}
    </div>
  );
};

export default ToggleMessage;
