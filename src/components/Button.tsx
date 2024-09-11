import React from 'react';

type Props = {
	title: string;
	isActive: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({ title, isActive, ...rest }: Props) {
	const KlassName = isActive ? 'bg-strong-cyan text-dark-cyan' : 'bg-grayish-cyan text-white';
	return (
		<button
			{...rest}
			className={'rounded-small h-8 font-bold cursor-pointer ' + KlassName}>
			{title}
		</button>
	);
}
