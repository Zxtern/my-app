import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-container">
            <nav className="nav-bar">
                <img src="/little_lemon_logo.jpg" alt="Little Lemon Logo" width="200" height="80"></img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;