const App = () => {
	const [username, setUserName] = React.useState(""); //
	
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
	const [status, setStatus] = React.useState(false);
	const [data, setData] = React.useState([]);


    const handleInput = (e) => {
		const { name, value } = e.target;
		setData([
			...data,
			{
				[name]: value, 
			},
		]);
	};
	const handleData = () => {
		let updatedData = [...data, { username, email,password }]; 
		setData(updatedData)
    }
    const handleReset = () => {
		setUserName("");
		setEmail("");
        setPassword("")
    };
    return (
		<>
			<input
				type="text"
				placeholder="Enter Username"
				onChange={handleInput}
				value={username} // tied to the react state
			/>
            <input
				// id="username"
				name="email"
				type="email"
				placeholder="Enter Email"
				value={email}
				onChange={handleInput}
			/>
            <input
				// id="username"
				name="email"
				type="email"
				placeholder="Enter Email"
				value={email}
				onChange={handleInput}
			/>
            <button onClick={handleData}>Agree to terms</button>
			{data.map((ele, index) => {
				return (
					<React.Fragment>
						<h1>{ele.username}</h1>
						<p>{ele.email}</p>
                        <p>{ele.password}</p>
					</React.Fragment>
				);
            })}
            <button onClick={handleReset}>Display data</button>
		</>
	);
};

const Input = (props) => {
	const { title, handleEmailInput, value } = props;
	return (
		<>
			<h1>{title}</h1>
			<input
				
				type="email"
				placeholder="Enter Email"
				value={value}
				onChange={handleEmailInput}
			/>
		</>
	);
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

