import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter } from 'react-router-dom'
const App =()=>{
  return(
    <div>
     <BrowserRouter> 
     
      <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider, useAuth } from "./Context/AuthContext";
// import Navbar from "./Components/Navbar";
// import HomePage from "./pages/HomePage";
// import BooksPage from "./pages/BooksPage";
// import BookDetailsPage from "./pages/BookDetailsPage";
// import LoginPage from "./pages/LoginPage";
// import PrivateRoute from "./Components/PrivateRoute";
// import AddBookPage from "./pages/AddBookPage"; 
// import EditBookPage from "./pages/EditBookPage"; 
// import { ToastContainer } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route
//             path="/books"
//             element={
//               <PrivateRoute>
//                 <BooksPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/books/:id"
//             element={
//               <PrivateRoute>
//                 <BookDetailsPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/add-book"
//             element={
//               <PrivateRoute>
//                 <AddBookPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/edit-book/:id"
//             element={
//               <PrivateRoute>
//                 <EditBookPage />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//         <ToastContainer /> {/* To show error messages */}
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
