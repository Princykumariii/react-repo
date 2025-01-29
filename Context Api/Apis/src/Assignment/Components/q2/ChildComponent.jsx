import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ChildComponent = () => {
  const { theme } = useContext(ThemeContext);

  // Style based on the current theme
  const componentStyle = {
    padding: '20px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  return (
    <div style={componentStyle}>
      <h2>Child Component</h2>
      <p>This component changes its background color based on the current theme.</p>
    </div>
  );
};

export default ChildComponent;
