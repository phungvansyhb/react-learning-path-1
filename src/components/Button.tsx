import React from 'react';

type Props = {
	title: string;
	isActive: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({ title, isActive, ...rest }: Props) {
	const KlassName = isActive ? 'bg-strong-cyan text-dark-cyan' : 'bg-dark-cyan text-white';
	return (
		<button
			{...rest}
			disabled={isActive}
			className={'rounded-small h-8 font-bold ' + KlassName}>
			{title}
		</button>
	);
}
