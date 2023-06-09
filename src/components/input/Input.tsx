type TInput<T> = {
	type: React.HTMLInputTypeAttribute;
	label: string;
	content: string | number;
	changeContent: (content: T) => void;
	required?: boolean;
	max?: number | string;
	min?: number | string;
	maxLength?: number;
	minLength?: number;
};
export const Input = <T,>({
	type,
	label,
	content,
	changeContent,
	required,
	max,
	min,
	maxLength,
	minLength,
}: TInput<T>) => {
	return (
		<div className="grid grid-cols-1 my-5">
			<label htmlFor={label} className="py-1">
				{label}
				{required && <span className="w-6 h-6 ml-1 rounded-full text-accent">※</span>}
			</label>
			<input
				max={max}
				min={min}
				maxLength={maxLength}
				minLength={minLength}
				type={type}
				className="py-1 px-2 rounded-sm bg-origin border-2 border-black"
				id={label}
				onChange={(e) => changeContent(e.target.value as T)}
				value={content}
				required={required}
			/>
		</div>
	);
};
