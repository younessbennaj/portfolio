import React from 'react';

import Button from "./Button";

const ProjectCard = () => {
    return (
        <div className="project-card">
            <div className="project-card__image">
                <img src="https://source.unsplash.com/random" alt="" />
            </div>

            <div className="project-card__tags">
                <span>#HTML</span>
                <span>#CSS</span>
                <span>#responsive</span>
            </div>
            <h2 className="project-card__title">title</h2>
            <p className="project-card__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor at veniam nisi nostrum corrupti excepturi blanditiis magni nesciunt.</p>
            <div className="button-group">
                <Button size="medium" color="primary" label="demo" />
                <Button size="medium" label="code" />
            </div>
        </div>
    );
}

export default ProjectCard;