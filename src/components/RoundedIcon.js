import React from 'react';

const RoundedIcon = ({ color, icon }) => {
    return (
        <span className={`rounded-icon rounded-icon-${color}`}><i className={`icofont-${icon}`}></i></span>
    )
}

export default RoundedIcon;