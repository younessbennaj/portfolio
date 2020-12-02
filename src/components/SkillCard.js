import React from 'react';
import Button from './Button';

const SkillCard = ({ title, description, render, url }) => {
    return (
        <div className="skill-card">
            {render()}
            <h2 className="skill-card__title">{title}</h2>
            <p className="skill-card__description">{description}</p>
            {/* <Button isLink={true} size="small" color="primary" label="en savoir plus"  /> */}
        </div>
    );
}

export default SkillCard;