import React from 'react';

import SkillCard from '../components/SkillCard';

const skill = {
    title: "front end",
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
    description: skill.description
};