
// import React from "react";
// import Header from "./Header";

const WelcomeCard = () => {
    return <div>
        <Header/>
        <Body/>
         <Footer/>
    </div>
};

const Header=() =>{
    return<h1>Welcome to React</h1>
};
const Body= ()=>{
    return <p>React makes building UIsfun and easy!</p>
}
const Footer = ()=>{
    return <p>Happy Coding!</p>
}
// const WelcomeCard = () => {
//     return <div>
//         <Header/>
//         <Body/>
//          <Footer/>
//     </div>
// };



ReactDOM.createRoot(document.getElementById("root")).render(<WelcomeCard/>)