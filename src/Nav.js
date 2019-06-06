import React from "react";

function Nav() {
    return(
        <div className="navContainer">
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

export default Nav;