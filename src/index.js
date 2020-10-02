import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { TweenMax, TimelineLite, Power3, gsap } from "gsap";

//Assets
import wave from "../assets/wave.jpg";
import heroBg from "../assets/hero-bg.jpg";
import profile from "../assets/me.jpg";

//Components 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Studies from "./components/Studies";
import About from "./components/About";

import "./style.scss";

let tl = new TimelineLite();

const App = () => {

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Studies />
            <About />

            {/* SKILLS SECTION */}
            <section className="skills">
                <h2 className="title-2">Discover my differents skills</h2>
                <p className="title-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className="skills__items">
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact">
                <p className="title-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <button className="btn">My resume</button>
                <button className="btn">Contact me</button>
            </section>

            {/* PORTFOLIO SECTION */}
            <section className="portfolio">
                <h2 className="title-2">You can check my differents projects</h2>
                <p className="title-3 portfolio__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className="portfolio__items">
                    <div className="portfolio-card">
                        <img src="https://via.placeholder.com/430x275" alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Sed ut perspiciatis</h6>
                            <p className="paragraph">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://via.placeholder.com/430x275" alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Sed ut perspiciatis</h6>
                            <p className="paragraph">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://via.placeholder.com/430x275" alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Sed ut perspiciatis</h6>
                            <p className="paragraph">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}

            <footer className="footer">
                <div className="footer__nav">
                    <ul>
                        <li><a href="#home"><strong>Home</strong></a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="footer__button-group">
                        <button className="btn">Contact me</button>
                        <button className="btn">My resume</button>
                    </div>
                </div>

                <hr />

                <div className="footer__social-links">
                    <p>© 2020 - Youness Bennaj</p>
                    <ul>
                        <li>Follow me:</li>
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">github</a></li>
                        <li><a href="#">linkedIn</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
)