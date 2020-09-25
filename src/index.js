import React from "react";
import ReactDOM from "react-dom";

import wave from "../assets/wave.jpg";
import heroBg from "../assets/hero-bg.jpg";
import profile from "../assets/me.jpg";

import "./style.scss";

const App = () => {
    return (
        <div className="container">
            <header className="navbar">
                <a href="#menu-mobile" className="navbar__toggle-btn">
                    <span className="navbar__burger-icon"></span>
                </a>
                <nav id="menu-mobile" className="navigation-mobile">
                    {/* <a href="#" className="navigation-mobile__close">close</a> */}
                    <ul className="navigation-mobile__list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <nav className="navigation-desktop">
                    <ul className="navigation-desktop__list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="hero">
                <div className="content">
                    <h1 className="hero__title">Hi 👋 ! I'm Youness Bennaj, a <span className="blue">JavaScript</span> & <span className="blue">React</span> Developer based in Paris.</h1>
                    <p className="hero__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem saepe, dolorum tempora magnam dignissimos eaque ipsa veniam aut pariatur dolore reiciendis, autem culpa eos amet qui dolorem at fugiat!</p>
                    <button className="hero__btn">Get in touch</button>
                    <hr />
                </div>
            </main>
            <section id="portfolio" className="portfolio">
                <h2>My Work</h2>
                <div className="portfolio__card">
                    <img className="portfolio__image" src="https://via.placeholder.com/450x600" alt="" />
                    <h4 className="portfolio__title">Title Project - Short description here</h4>
                    <p className="portfolio__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate hic officia necessitatibus nisi! Officiis rem mollitia iusto corporis eligendi, earum odio perferendis quisquam saepe nisi voluptatum nesciunt est sequi facilis!</p>
                    <button className="portfolio__btn"><span>view on github →</span></button>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__image" src="https://via.placeholder.com/450x600" alt="" />
                    <h4 className="portfolio__title">Title Project - Short description here</h4>
                    <p className="portfolio__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate hic officia necessitatibus nisi! Officiis rem mollitia iusto corporis eligendi, earum odio perferendis quisquam saepe nisi voluptatum nesciunt est sequi facilis!</p>
                    <button className="portfolio__btn"><span>view on github →</span></button>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__image" src="https://via.placeholder.com/450x600" alt="" />
                    <h4 className="portfolio__title">Title Project - Short description here</h4>
                    <p className="portfolio__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate hic officia necessitatibus nisi! Officiis rem mollitia iusto corporis eligendi, earum odio perferendis quisquam saepe nisi voluptatum nesciunt est sequi facilis!</p>
                    <button className="portfolio__btn"><span>view on github →</span></button>
                </div>
            </section>
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
)