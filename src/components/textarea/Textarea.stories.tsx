import { Textarea } from './Textarea';
import { StoryFn } from '@storybook/react';

export default {
	component: Textarea,
	title: 'Textarea',
};

const Template: StoryFn<React.ComponentProps<typeof Textarea>> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: '名前',
	content: 'miso',
	changeContent: () => {},
};
