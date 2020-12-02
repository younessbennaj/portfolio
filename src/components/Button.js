import React from 'react';

import "../styles/style.scss";

const Button = ({ label, size, color, url }) => {
    return (
        <button className={`btn btn-${size} btn-${color}`}>
            <a href={url} target="_blank">{label}</a>
        </button>
    );
}

export default Button;