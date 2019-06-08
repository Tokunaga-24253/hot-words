import React from 'react';
import './Footer.css'
import github from '../../image/github.svg'

function Footer() {
    return(
        <footer>
            <address>
                <p>Posted by: Tokunaga_X</p>
                <a href="https://github.com/Tokunaga-24253"><img src={github} alt=""/></a>
            </address>
        </footer>
    );
};

export default Footer;