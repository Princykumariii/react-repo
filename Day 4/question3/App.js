const Container =({title,children})=>{
   console.log(title,children);
}


const title = (props)=>{
  const {blog} = props;
  return (
  <div style = {{ backgroundColor:blog.isFeatured && "LightYellow"}}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      </div>
  )
};

const App=()=>{
  return <div style={{padding:"20px",fontFamily: 'Arial, sans-serif'}}>
    <Container title ="heading">
    <h1>Welcome to the container component</h1>
    </Container>
    <Container title ="paragraph">
    <p>This is a reusable container component</p>
    </Container>
    <Container title ="Button">
    <button style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Click Me
        </button>
    </Container>
  </div>
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
