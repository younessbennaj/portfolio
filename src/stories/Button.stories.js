import React from 'react';

import Button from '../components/Button';

export default {
    title: 'Button',
    component: Button
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});

Small.args = {
    label: "small",
    size: "small"
};

export const Medium = Template.bind({});

Medium.args = {
    label: "medium",
    size: "medium"
};

export const Large = Template.bind({});

Large.args = {
    label: "large",
    size: "large"
};

export const Default = Template.bind({});

Default.args = {
    label: "default",
    size: "medium",
    color: "default"
};

export const Primary = Template.bind({});

Primary.args = {
    label: "primary",
    size: "medium",
    color: "primary"
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: "secondary",
    size: "medium",
    color: "secondary"
};