import React from "react"
import {Link} from "react-router-dom"
import "../Styles/Navbar.css"
const Navbar = () => {
	
    return (
        <nav className="navbar">
            <div className="navbar-left">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Books"  className="nav-link"> Books</Link>
            </div>
            <div className="navbar-login">
				<Link to="/Login">Login</Link>
			</div>
        </nav>
    )
}

export default Navbar
