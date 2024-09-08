type Props = {
	title?: string;
};

export default function Title({ title }: Props) {
	return <div className='text-dark-cyan font-bold'>{title}</div>;
}
