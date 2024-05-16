import { NavLink } from "react-router-dom";

function Navbar(){

    return (
        <nav >
            <NavLink
            to="/"
            className="nav-link"
            >
            Home
            </NavLink>
            <NavLink
            to="/american-league" 
            className="nav-link"
            >
            American League    
            </NavLink>
            <NavLink
            to="/national-league" 
            className="nav-link"
            >
            National League
            </NavLink>
        </nav>
    )
}

export default Navbar