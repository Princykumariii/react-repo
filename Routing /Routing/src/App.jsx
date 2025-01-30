import React from "react"
import {  Routes, Route } from "react-router-dom";
import Navbar from "./Components/question1/Navbar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
	return (
		<div>
			
			<Navbar />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/Home"
					element={
					<Home />
						}
				/>
				<Route
					path="/about"
					element={
					<About />
						
					}
				/>
        <Route
					path="/Contact"
					element={
						<Contact/>
						
					}
				/>
				</Routes>
			
		</div>
	);
};
export default App