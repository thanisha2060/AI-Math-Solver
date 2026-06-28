import "./Navbar.css";
import { FaCalculator } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <FaCalculator />
                <span>AI Math Solver</span>
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
            </ul>

            <button className="login-btn">
                Login
            </button>

        </nav>
    );
}

export default Navbar;