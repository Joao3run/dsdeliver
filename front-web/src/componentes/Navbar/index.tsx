import React from 'react';
import './styles.css'
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Link } from'react-router-dom'
const Navbar = () => {
    return (
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Deliver</Link>
        </nav>
    )
};

export default Navbar;
