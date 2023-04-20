import { FC } from "react";

type Props = {
	elm: React.ElementType;
	text: string;
	size?: "text-sm" | "text-2xl";
	line?: "font-thin" | "font-bold";
	className?: string;
};

export const Typography: FC<Props> = ({ elm, text, size, line, className }) => {
	const Element: React.ElementType = elm;

	return <Element className={`${className ?? ""} ${line ?? "base"} ${size ?? "base"}`}>{text}</Element>;
};
