import React from 'react';

import SkillCard from '../components/SkillCard';

import RoundedIcon from "../components/RoundedIcon";

const skill = {
    title: "my skill",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio culpa sunt eaque iure asperiores quo officia aspernatur placeat similique inventore tempore."
}

export default {
    title: 'SkillCard',
    component: SkillCard
};

const Template = (args) => <SkillCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: skill.title,
    description: skill.description,
    render: () => {
        return <RoundedIcon color="primary" icon="icon" />
    }
};

export const RedIcon = Template.bind({});

RedIcon.args = {
    title: skill.title,
    description: skill.description,
    render: () => {
        return <RoundedIcon color="red" icon="icon" />
    }
};

export const GreenIcon = Template.bind({});

GreenIcon.args = {
    title: skill.title,
    description: skill.description,
    render: () => {
        return <RoundedIcon color="green" icon="icon" />
    }
};

