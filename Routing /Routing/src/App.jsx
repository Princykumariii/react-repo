// import React from "react"
// import {  Routes, Route } from "react-router-dom";
// import Navbar from "./Comp/Question1/Navbar"
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Users from "./pages/Users";
// import UserDetails from "./pages/UserDetails";


// const App = () => {
// 	return (
// 		<div>
			
// 			<Navbar />
			
// 			<Routes>
// 				<Route path="/" element={<Home />} />
				
// 				<Route
// 					path="/about"
// 					element={
// 					<About />
						
// 					}
// 				/>
//         <Route
// 					path="/Contact"
// 					element={
// 						<Contact/>
						
// 					}
// 				/>
//         <Route
// 					path="/users"
// 					element={
// 						<Users/>
						
// 					}
// 				/>
//         <Route
// 					path="/usersdetails"
// 					element={
// 						<UsersDetails/>
						
// 					}
// 				/>
// 				</Routes>
			
// 		</div>
// 	);
// }

// // function App() {
// //   return (
// //     <Routes>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/users" element={<Users />} />
// //         <Route path="/users/:id" element={<UserDetails />} />
// //       </Routes>
// //     </Routes>
// //   );
// // }

// export default App;


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
