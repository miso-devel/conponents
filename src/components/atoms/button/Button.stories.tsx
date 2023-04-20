import { Button } from "./Button";
import { StoryFn } from "@storybook/react";
export default {
	component: Button,
	title: "Button",
};

const Template: StoryFn<React.ComponentProps<typeof Button>> = (args) => (
	<Button {...args} />
);

export const Default = Template.bind({});

Default.args = {
	onClick: () => {},
	text: "ボタン",
};
