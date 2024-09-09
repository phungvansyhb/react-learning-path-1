import React from 'react';

type CardProps = { children: React.ReactNode };

function CardItem({ children }: CardProps) {
	return (
		<div className='bg-dark-cyan rounded-large p-6 flex flex-col desktop:justify-between gap-6 flex-1'>
			{children}
		</div>
	);
}

type NumberProps = {
	value: string;
};
function NumberItem({ value }: NumberProps) {
	return <span className='font-bold text-strong-cyan'>${value}</span>;
}

type TitleProps = {
	title: string;
	description: string;
};
function TitleItem({ title, description }: TitleProps) {
	return (
		<div className='flex flex-col'>
			<div className='text-sm text-white'>{title}</div>
			<div className='text-[10px] text-very-light-grayish-cyan'>{description}</div>
		</div>
	);
}

export default { CardItem, NumberItem, TitleItem };
