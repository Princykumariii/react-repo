{/* <div id ="container">
    <h1 id = "heading">Welcome Back</h1>
    <p id= "subHeading">it is module 3</p>
</div> */}
{/* <ul>
    <li>computers</li>
    <li>mobiles</li>
    <li>dektops</li>
</ul> */}
 
let element = (
    <React.Fragment>
        <div id="container" style= {{background:"pink"}}>this is container</div>
        <h1 id= "heading"
         style={{color :"red"}} className="mainheading">Welcome Back</h1>
        <p id ="subheading" style= {{background:"blue"}}>it is module 3</p>
        <img src="" alt=""/>
        <input type="text" placeholder="Enter name"/>
    </React.Fragment>
)

// let element = <h1>React can make the devlopment{10+2}times easier</h1>
let rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(element);

// jsx=> html is in js file
// more readble
// efficient code
// syntax
