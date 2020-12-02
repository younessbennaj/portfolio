import React from 'react';

const RoundedIcon = ({ color, icon }) => {
    return (
        <span className={`rounded-icon rounded-icon-${color}`}>{icon}</span>
    )
}

export default RoundedIcon;