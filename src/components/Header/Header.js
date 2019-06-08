import React from "react";
import './Header.css'

function Header() {
    return(
        <div className="header">
            <header>
                <h2>Hot-Words</h2>
                <nav>
                    <ul>
                        <li><a href="index.html">Home Page</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;