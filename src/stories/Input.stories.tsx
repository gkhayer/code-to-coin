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
  size: "large",
  type: "text",
};

export const Number = Template.bind({});
Number.args = {
  size: "large",
  type: "number",
};

export const Submit = Template.bind({});
Submit.args = {
  size: "large",
  type: "submit",
};
