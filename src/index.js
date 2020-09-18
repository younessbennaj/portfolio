import React from "react";
import ReactDOM from "react-dom";

import wave from "../assets/wave.jpg";

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
                <div className="hero__grid">
                    <div className="hero__text">
                        <h1 className="hero__title">👋, I'm Youness. <span className="blue">JavaScript</span> & <span className="blue">React</span> Developer.</h1>
                        <p className="hero__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem saepe, dolorum tempora magnam dignissimos eaque ipsa veniam aut pariatur dolore reiciendis, autem culpa eos amet qui dolorem at fugiat!</p>
                        <button className="hero__btn">Get in touch</button>
                    </div>
                    <h2>Portfolio</h2>
                    <img className="hero__image" src={wave} alt="" />
                </div>
            </main>
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
)