import { Typography } from "./Typography";
import { StoryFn } from "@storybook/react";

export default {
	component: Typography,
	title: "Typography",
};

const Template: StoryFn<React.ComponentProps<typeof Typography>> = (args) => <Typography {...args} />;

export const Default = Template.bind({});

Default.args = {
	elm: "h1",
	text: "h1要素",
	line: "font-bold",
	size: "text-2xl",
};
