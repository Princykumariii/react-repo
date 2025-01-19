
function nav(){
    return<>
    <App/>
    </>
}
function App() {
    const [activeTab, setActiveTab] = React.useState('Home');
  
    // Content for each tab
    const tabContent = {
      Home: 'Welcome to the Home Page.',
      About: 'Learn more About Us.',
      Contact: 'Get in touch with us via Contact Page.',
    };
  
    return (
      <div className="App">
        <div className="tab-buttons">
          {/* Render tab buttons */}
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
  
        {/* Display content for the active tab */}
        <div className="tab-content">
          <p>{tabContent[activeTab]}</p>
        </div>
      </div>
    );
  }
  




ReactDOM.createRoot(document.getElementById("root")).render(<App/>)