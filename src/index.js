import React from "react";
import ReactDOM from "react-dom";

import wave from "../assets/wave.jpg";
import heroBg from "../assets/hero-bg.jpg";
import profile from "../assets/me.jpg";

import "./style.scss";

const App = () => {
    return (
        <div className="container">

            {/* NAVBAR */}
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

            {/* HERO SECTION */}
            <main className="hero">
                <div className="content">
                    <h1 className="hero__title">I'm Youness Bennaj,<br /> a JavaScript Developer.</h1>
                    <button className="hero__btn">Get in touch</button>
                </div>
                <div className="image">
                </div>
            </main>

            {/* STUDIES SECTION */}
            <section className="studies">

                <h2 className="studies__title">What kind of subject did I study ?</h2>

                <div className="studies__item">
                    <h4>Sed ut perspiciatis</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    <button>Learn more</button>
                </div>

                <div className="studies__item">
                    <h4>Lorem ipsum dolor</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    <button>Learn more</button>
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