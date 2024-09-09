import React from 'react';

type Props = {
	prefixIcon: React.ReactNode;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function Input({ prefixIcon, ...rest }: Props) {
	return (
		<div className='relative '>
			<div className='absolute left-4 top-2 font-bold text-grayish-cyan'>{prefixIcon}</div>
			<input
				className='focus:outline-strong-cyan rounded-small flex justify-between bg-very-light-grayish-cyan h-10 w-full p-4 text-right font-bold text-dark-cyan'
				{...rest}
			/>
		</div>
	);
}
