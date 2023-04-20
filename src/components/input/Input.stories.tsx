import { Input } from './Input';
import { StoryFn } from '@storybook/react';

export default {
	component: Input,
	title: 'Input',
};

const Template: StoryFn<React.ComponentProps<typeof Input>> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'text',
	label: '名前',
	content: 'miso',
	changeContent: () => {},
};
