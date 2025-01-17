const App = () => {
    return <div className="Welcome-card">
        <Heading/>
        <Body/>
         <Footer/>
    </div>
};



const Heading=() =>{
    return <h1>Welcome to React</h1>
};
const Body= ()=>{
    return <p>React makes building UIsfun and easy!</p>
}
const Footer = ()=>{
    return <p>Happy Coding!</p>
}



ReactDOM.createRoot(document.getElementById("root")).render(<App/>)