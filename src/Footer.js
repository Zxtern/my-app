import React from "react";

function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer-links">
                <ul>Navigation
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                <ul>Contact
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                    <li>Reservations</li>
                </ul>
                <ul>Social Media Links
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>TikTok</li>
                </ul>
        </footer>
            <div className="copyright-container">
                <p>Copyright © 2025 Little Lemon</p>
            </div>
        </div>
    );
}

export default Footer;