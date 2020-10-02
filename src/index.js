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
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

import "./style.scss";

let tl = new TimelineLite();

const App = () => {

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Studies />
            <About />
            <Skills />
            <Contact />
            <Portfolio />



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