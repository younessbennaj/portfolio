import React from 'react';
import Button from './Button';

const SkillCard = ({ title, description, render }) => {
    return (
        <div className="skill-card">
            {render()}
            {/* <RoundedIcon color="primary" icon="icon" /> */}
            {/* <span class="rounded-icon">icon</span> */}
            <h2 className="skill-card__title">{title}</h2>
            <p className="skill-card__description">{description}</p>
            <Button size="small" color="primary" label="en savoir plus" />
        </div>
    );
}

export default SkillCard;