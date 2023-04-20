import { FC } from 'react';

type TButton = {
	text: string;
	className?: string;
	onClick?: () => void;
	disable?: boolean;
	border?: boolean;
};
export const Button: FC<TButton> = ({ text, className, onClick, border, disable }) => {
	return (
		<button onClick={onClick} className={`${className}`} disabled={disable}>
			<span className={`${border ? 'border-2 border-slate-300' : ''} px-3 py-1`}>{text}</span>
		</button>
	);
};
