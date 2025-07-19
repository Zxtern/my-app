import React from "react";

function Header() {
    return (
        <div className="about-container">
            <header className="about-content">
                <div className="about-text">
                    <h1>Little Lemon</h1>
                    <h2>Silicon Valley</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    <button>Reserve Now</button>
                </div>
                <img src="/AboutUsPic.jpg" alt="About Us" width="300" height="300"></img>
            </header>
        </div>
    );
}

export default Header;