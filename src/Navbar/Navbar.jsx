import { NavLink } from "react-router-dom";



const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/Home">Home</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/Register">Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">

            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navLinks}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
        </div>
    );
};

export default Navbar;