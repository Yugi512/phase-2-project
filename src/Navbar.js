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
            to="/one-piece" 
            className="nav-link"
            >
            One Piece     
            </NavLink>
            <NavLink
            to="/jujutsu-kaisen" 
            className="nav-link"
            >
            Jujutsu Kaisen
            </NavLink>
            <NavLink
            to="/t-t-i-g-r-a-a-s" 
            className="nav-link"
            >
            That Time I Got Reincarnated As A Slime    
            </NavLink>
        </nav>
    )
}

export default Navbar