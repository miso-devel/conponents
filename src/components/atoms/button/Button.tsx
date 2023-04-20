import { FC } from "react";

type TButton = {
	text: string;
	onClick: () => void;
};

export const Button: FC<TButton> = ({ text, onClick }) => {
	return (
		<button
			className="border-2 rounded-md p-10 border-red-300"
			onClick={onClick}
		>
			{text}
		</button>
	);
};
