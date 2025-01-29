// import React from "react"
// import "./App.css"
// import ChildA from "./Assignment/Components/ChildA"
// import ChildB from "./Assignment/Components/ChildB"
// import ChildC from "./Assignment/Components/ChildC"
// function App(){
//   const name="Princy"
//   return(
//     <div className="App">
     
//      <ChildA name ={name}/>
//      <ChildB/>
//      <ChildC/>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { ThemeProvider, ThemeContext } from './Assignment/ThemeContext';
import ChildComponent from './Assignment/ChildComponent';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Context API - Theme Toggle</h1>
      <button onClick={toggleTheme} style={{ padding: '10px 20px', marginBottom: '20px' }}>
        Toggle Theme
      </button>
      <ChildComponent />
      <div style={{ marginTop: '30px' }}>
        <p>Current theme: {theme}</p>
      </div>
    </div>
  );
};

const AppWithProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithProvider;
