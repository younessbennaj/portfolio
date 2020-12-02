import React from 'react';

import {
    Link
} from "react-router-dom";

import "../styles/style.scss";

const Button = ({ label, size, color, url, anchor }) => {
    return (
        <button className={`btn btn-${size} btn-${color}`}>
            {url ? <a href={url} target="_blank">{label}</a> : <a href={anchor}>{label}</a>}
        </button>
    );
}

export default Button;