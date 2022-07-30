import {
Link
} from "react-router-dom";
import {
useTheme, useAuth
} from "../../hooks";
import "./navbar.css";

const Navbar = () => {
const { currentTheme, handleCurrentTheme } = useTheme();
const {
authState: { isAuthenticated },
logout
} = useAuth();
return(
<nav className="navbar">
    <div className="left-navbar">
        <button id="menu-icon-button" className="burger-menu-button navlist-link-item">
            <i className="fas fa-bars"></i>
        </button>
        <Link to="/" className="link-no-style">
        <div className="nav-logo-title"> <span className="text-xl custom-color">k</span>ayy<span
                className="text-xl custom-color">O</span>quiz</div>
        </Link>
    </div>
    <ul className="right-navbar">
        <li>
            <Link to="/" className="navlist-link-item "> <button className="btn link-btn home-btn-link">Home</button>
            </Link>
        </li>

        <li className="navlist-link-item theme-toggle-btn-link">
            <button className={`theme-toggle-btn text-md ${ currentTheme==="light" ? "rotate-light" : "rotate" }`}
                onClick={handleCurrentTheme}>
                <i className={`fas fa-${currentTheme==="light" ? "moon" : "sun" }`}></i>
            </button>
        </li>
        {isAuthenticated ? (
        <li>
            <button className="btn btn-primary" onClick={()=> logout()}>
                Logout
            </button>
        </li>
        ) : (
        <li>
            <Link to="/sign-in" className="anchor-tag-badge-container"> <i className="fas fa-user"></i></Link>
        </li>
        )}
    </ul>
</nav>
);
};

export {
Navbar
}