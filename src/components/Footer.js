import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__nav">
                <ul>
                    <li><a href="#home"><strong>Home</strong></a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="footer__button-group">
                    <button className="btn btn-primary">Contact me</button>
                    <button className="btn btn-outline">My resume</button>
                </div>
            </div>

            <hr />

            <div className="footer__social-links">
                <p>© 2020 - Youness Bennaj</p>
                <ul>
                    <li>Follow me:</li>
                    <li><a href="https://twitter.com/younessbennaj" target="_blank"><i className="icofont-twitter"></i></a></li>
                    <li><a href="https://github.com/younessbennaj?tab=repositories" target="_blank"><i className="icofont-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/youness-bennaj-a632a9126/" target="_blank"><i className="icofont-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;