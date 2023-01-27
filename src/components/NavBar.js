import {NavLink} from "react-router-dom";
import "./style.css"
function NavBar(){
    return(
        <div className="nav">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink>
           <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}
export default NavBar;