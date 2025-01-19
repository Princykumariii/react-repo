function ToggleMessage() {
  const [isMessageVisible, setIsMessageVisible] = React.useState(false);
    const toggleMessage=()=>{
      setIsMessageVisible(!isMessageVisible)
    };
  return (

<div style= {{textAlign: 'center', marginTop: '50px' }}>
<button onClick={toggleMessage}>
{isMessageVisible ? 'Hide' : 'Show'}
      </button>
      {isMessageVisible && (
        <p style={{ marginTop: '20px',color:"blue" }}>
          Hello, welcome to React state management!
        </p>
      )}


</div>
  )
}
const App =()=>{
  return<div>
 
    <ToggleMessage/>
  
  </div>
}



ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
