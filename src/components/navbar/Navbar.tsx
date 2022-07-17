import {
Link
} from "react-router-dom";
import {
useTheme
} from "../../hooks";
import "./navbar.css";

const Navbar = () => {
const { currentTheme, handleCurrentTheme } = useTheme();
return(
<nav className="navbar">
    <div className="left-navbar">
        <button id="menu-icon-button" className="burger-menu-button navlist-link-item">
            <i className="fas fa-bars"></i>
        </button>
        <a className="link-no-style" href="./">
            <div className="nav-logo-title"> <span className="text-xl custom-color">k</span>ayy<span
                    className="text-xl custom-color">O</span>quiz</div>
        </a>
    </div>
    <ul className="right-navbar">
        <li>
            <Link to="/" className="navlist-link-item"> <button className="btn link-btn">Home</button>
            </Link>
        </li>
        <li>
            <Link to="/signin" className="anchor-tag-badge-container"> <i className="fas fa-user "></i> <span
                className="text-xs">Login</span></Link>
        </li>
        <li className="navlist-link-item">
            <button className={`theme-toggle-btn text-md ${ currentTheme==="light" ? "rotate-light" : "rotate" }`}
                onClick={handleCurrentTheme}>
                <i className={`fas fa-${currentTheme==="light" ? "moon" : "sun" }`}></i>
            </button>
        </li>
    </ul>
</nav>
);
};

export {
Navbar
}