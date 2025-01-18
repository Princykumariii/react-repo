
const Heading=() =>{
    return <div className="heading">
        <h2>The Right Plan for Your Bussiness</h2>
   <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
   incididunt ut labore et dolore magna aliqua.</p>
   </div>
};

const Box = (props) =>{
    console.log(props)
    return<div className="box">
        {/* {title} */}
        <h3>{props.title}</h3>
        <List/>
        {/* {cost} */}
        <h2>{props.cost}</h2>
        <button className = "button" style ={props.style}>Get Started</button>
    </div>
};
const List = ()=>{
    return <ul>
        <li>1 lorem ipsum</li>
        <li>Lorem,ipsum dolore</li>
        <li>Monthly Updates</li>
    </ul>
}
const App = ()=>{
 return<div > 
   
 
       
        <Heading/>
        <Box title = "starter" cost = "Free" style ={{color:"purple",backgroundcolor:"white"}}/>
        <Box title = "Lorem Plus" cost = "$32.00" style ={{color:"White",backgroundColor:" purple"}}/>
        <Box title = "Lorem Pro" cost = "$50.00" style={{color:"purple",backgroundcolor:"white"}}/>
       
    </div>
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)