import { ReactNode } from 'react';

type TFormWrapper = {
	children: ReactNode;
	onSubmit: () => void;
};

export const FormWrapper = ({ children, onSubmit }: TFormWrapper) => {
	return (
		<form
			className="text-left md:w-1/3 w-4/5 m-auto my-5"
			onSubmit={(event) => {
				event.preventDefault();
				onSubmit();
			}}
		>
			{children}
		</form>
	);
};
