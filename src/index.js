import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";

const App = () => {
    return (
        <div className="container">
            <header className="navbar">
                <a href="#menu" className="navbar__btn">
                    <span className="burger"></span>
                </a>
                <nav id="menu" className="navigation">
                    <a href="#" className="navigation__close">close</a>
                    <ul className="navigation__list">
                        <li><a href="#about">about</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className="main">
                <div className="grid">
                    <div className="text">
                        <h2>youness bennaj</h2>
                        <h1>JavaScript & React Developer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem saepe, dolorum tempora magnam dignissimos eaque ipsa veniam aut pariatur dolore reiciendis, autem culpa eos amet qui dolorem at fugiat!</p>
                        <button>Button text</button>
                    </div>

                    <img className="image" src="https://via.placeholder.com/500x700" alt="" />
                </div>
            </div>
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
)