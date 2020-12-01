import React from 'react';

import ProjectCard from '../components/ProjectCard';

import { projects } from "../data/projects";

const { title, tags, description, links, image } = projects[0];

export default {
    title: 'ProjectCard',
    component: ProjectCard
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    title,
    tags,
    description,
    links,
    image
};

console.log(projects);