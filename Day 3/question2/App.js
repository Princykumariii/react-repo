const Card = (props)=>{
    console.log(props);
    const {children,title} = props
  return <div>
<h1>{title}</h1>
{children}
  </div>
}


const App = () =>{
   return <div className = "card">
    <div className="card1">
    <Card title = "card1">
        <h2> History</h2>
        <p>welcome to card 1</p>
    </Card>
    </div>
    <div className="card2">
    <Card title = "card2">
        <h2>Zoology</h2>
        <p>Welcome to card 2</p>
    </Card>
    </div>
    <div className="card3">
    <Card title = 'card3'>
        <h2>Physics</h2>
        <p>Welcome to card 3</p>
    </Card>
    </div>
   </div>

    
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)