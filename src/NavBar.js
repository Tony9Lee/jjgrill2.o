import { NavLink } from "react-router-dom";
import "./NavBar.css"; // import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink 
          to="/order-online" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Order Online
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
