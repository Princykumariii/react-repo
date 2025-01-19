function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Container>
        <h1>This is a Heading</h1>
        <p>This is a paragraph inside the container.</p>
      </Container>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)