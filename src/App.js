import React, { useState, useRef, useEffect } from "react";

import { TweenMax, TimelineLite, Power3, gsap } from "gsap";

//Components 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Studies from "./components/Studies";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Foorter from "./components/Footer";

import "./styles/style.scss";
import "../assets/icon/icofont.scss";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let tl = new TimelineLite();

const App = () => {

    return (
        <div className="container">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Hero />
                        {/* <Studies />
                        <About /> */}
                        <Skills />
                        <Portfolio />
                        <Contact />
                    </Route>
                    <Route path="/skills">
                        <h2>Skill</h2>
                    </Route>
                </Switch>
                <Foorter />
            </Router>
        </div>
    );
}

export default App;