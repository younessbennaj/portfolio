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
import Foorter from "./components/Footer";

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
            <Foorter />
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
)