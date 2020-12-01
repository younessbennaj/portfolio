import React from 'react';

import ProjectCard from './ProjectCard';

import { projects } from "../data/projects";

const { title, tags, description, links } = projects[0];

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
    links
};

console.log(projects);