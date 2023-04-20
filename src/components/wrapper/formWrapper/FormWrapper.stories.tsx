import { FormWrapper } from './FormWrapper';
import { StoryFn } from '@storybook/react';

export default {
	component: FormWrapper,
	title: 'FormWrapper',
};

const Template: StoryFn<React.ComponentProps<typeof FormWrapper>> = (args) => <FormWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: <div>node</div>,
	onSubmit: () => {},
};
