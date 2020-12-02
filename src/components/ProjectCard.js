import React from 'react';

import Button from "../components/Button";

const ProjectCard = ({ title, tags, description, links, image }) => {

    return (
        <div className="project-card">
            <div className="project-card__image">
                <img src={image} alt="" />
            </div>

            <div className="project-card__tags">
                {tags.map(tag => {
                    return (
                        <span key={tag}>#{tag}</span>
                    )
                })}
            </div>
            <h2 className="project-card__title">{title}</h2>
            <p className="project-card__description">{description}</p>
            <div className="button-group">
                {links.live && <Button size="medium" color="primary" label="demo" url={links.live} />}
                <Button size="medium" color="default" label="code" url={links.github} />
            </div>
        </div>
    );
}

export default ProjectCard;