import React from "react";

function Nav() {
    return (
        <nav>
            <img src="/little_lemon_logo.jpg" alt="Little Lemon Logo" width="200" height="80"></img>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#meu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;