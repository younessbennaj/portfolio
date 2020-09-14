import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";

const App = () => {
    return (
        <div className="container">
            <div className="grid">
                <div className="text">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem saepe, dolorum tempora magnam dignissimos eaque ipsa veniam aut pariatur dolore reiciendis, autem culpa eos amet qui dolorem at fugiat!</p>
                    <button>Button text</button>
                </div>

                <div className="image">
                    <img src="https://via.placeholder.com/500x700" alt="" />
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