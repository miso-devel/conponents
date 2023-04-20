import { Loading } from './Loading';
import { StoryFn } from '@storybook/react';

export default {
	component: Loading,
	title: 'Loading',
};

const Template: StoryFn<React.ComponentProps<typeof Loading>> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};
