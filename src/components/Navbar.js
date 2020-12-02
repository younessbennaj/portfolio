import React from 'react';

const Navar = () => {
    return (
        <header className="navbar">
            <a href="#menu-mobile" className="navbar__toggle-btn">
                <span className="navbar__burger-icon"></span>
            </a>
            <nav id="menu-mobile" className="navigation-mobile">
                <span className="navigation-mobile__close-icon"><a href="#">close</a></span>
                <ul className="navigation-mobile__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#contact">Contacts</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ul>
            </nav>
            <nav className="navigation-desktop">
                <ul className="navigation-desktop__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#contact">Contacts</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navar;