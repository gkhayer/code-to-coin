import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
};

export const Submit = Template.bind({});
Submit.args = {
  type: "submit",
};
