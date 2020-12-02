import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { TweenMax, TimelineLite, Power3, gsap } from "gsap";

//Components 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Studies from "./components/Studies";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Foorter from "./components/Footer";

import "./styles/style.scss";
import "../assets/icon/icofont.scss";

let tl = new TimelineLite();

const App = () => {

    return (
        <div className="container">
            <Navbar />
            <Hero />
            {/* <Studies />
            <About />
            <Skills /> */}
            <Portfolio />
            <Contact />
            <Foorter />
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
)