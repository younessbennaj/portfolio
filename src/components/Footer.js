import React from 'react';
// Assets
import resume from "../../assets/younessbennaj.pdf";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__nav">
                <ul>
                    <li><a href="#home"><strong>Home</strong></a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </ul>
                <div className="footer__button-group">
                    <button className="btn btn-primary"><a href={resume} target="_blank">My resume</a></button>
                    <button className="btn btn-outline"><a href="mailto:youness.bennaj@gmail.com">Contact me</a></button>
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