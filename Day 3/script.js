//style = "color:red,background-color:green"

// 

const Heading = () =>{
    return <h1>Heading</h1>
};
const Footer = () =>{
    return <h2>Footer Content</h2>
};

const App = ()=>{
  return (
    <div>
        <Heading/>
        {/* {child component} */}
        <Heading/>
        {/* {child component} */}
        <p>Sub heading</p>
        <Footer/>
    </div>
  )
}



