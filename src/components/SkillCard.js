import React from 'react';
import Button from './Button';

const RoundedIcon = ({ color, icon }) => {
    return (
        <span class={`rounded-icon rounded-icon-${color}`}>{icon}</span>
    )
}

const SkillCard = ({ title, description }) => {
    return (
        <div className="skill-card">
            <RoundedIcon color="primary" icon="icon" />
            {/* <span class="rounded-icon">icon</span> */}
            <h2 className="skill-card__title">{title}</h2>
            <p className="skill-card__description">{description}</p>
            <Button size="small" color="primary" label="en savoir plus" />
        </div>
    );
}

export default SkillCard;