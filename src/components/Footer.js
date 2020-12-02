import React from 'react';

import Button from './Button';

// Assets
import resume from "../../assets/younessbennaj.pdf";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__nav">
                <ul>
                    <li><a href="#home"><strong>Home</strong></a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#contact">Contacts</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ul>
                <div className="footer__button-group">
                    <Button size="medium" color="primary" url={resume} label="Téléchargez mon CV" />
                    <Button size="medium" color="secondary" url="mailto:youness.bennaj@gmail.com" label="Contactez moi" />
                    {/* <button className="btn btn-primary"><a href={resume} target="_blank">Téléchargez mon CV</a></button>
                    <button className="btn btn-outline"><a href="mailto:youness.bennaj@gmail.com">Contactez moi</a></button> */}
                </div>
            </div>

            <hr />

            <div className="footer__social-links">
                <p>© 2020 - Youness Bennaj</p>
                <ul>
                    <li>Suivez moi:</li>
                    <li><a href="https://twitter.com/younessbennaj" target="_blank"><i className="icofont-twitter"></i></a></li>
                    <li><a href="https://github.com/younessbennaj?tab=repositories" target="_blank"><i className="icofont-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/youness-bennaj-a632a9126/" target="_blank"><i className="icofont-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;