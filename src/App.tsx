import { useCallback, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Title from './components/Title';
import IconPerson from '/images/icon-person.svg';
import Summary from './components/Summary';

function App() {
	const [bill, setBill] = useState(0);
	const [currentTips, setCurrentTips] = useState(10);
	const [person, setPerson] = useState(1);
	const [customTip, setCustomTip] = useState(NaN);
	const isDisable = bill === 0 || person === 0;
	const calTipAmountPerPerson = useCallback(() => {
		return Number((bill * (currentTips / 100)) / person).toFixed(2);
	}, [bill, currentTips, person]);

	const calTotalAmountPerPerson = useCallback(() => {
		return Number(bill / person + bill * (currentTips / 100)).toFixed(2);
	}, [bill, currentTips, person]);

	function handleOnChangeBill(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		if (!value) setBill(0);
		// eslint-disable-next-line no-extra-boolean-cast
		else if (!!Number(value)) {
			setBill(Number(value));
		}
	}

	function handleOnChangePerson(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		if (!value) setPerson(1);
		// eslint-disable-next-line no-extra-boolean-cast
		else if (!!Number(value)) {
			setPerson(Number(value));
		}
	}

	function handleCustomTip(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		if (!value) {
			setCustomTip(0);
			setCurrentTips(0);
		}
		// eslint-disable-next-line no-extra-boolean-cast
		else if (!!Number(value)) {
			setCustomTip(Number(value));
			setCurrentTips(Number(value));
		}
	}

	function handleSelectTips(tip: number) {
		setCurrentTips(tip);
		setCustomTip(NaN);
	}

	function handleReset() {
		if (!isDisable) {
			setBill(0);
			setPerson(1);
			setCurrentTips(10);
			setCustomTip(NaN);
		}
	}

	return (
		<section className='bg-light-grayish-cyan min-h-screen font-space-mono pt-7'>
			{/* app logo height 80px */}
			<div className='text-center *:tracking-[8px] *:text-dark-cyan *:text-[24px] *:font-bold *:block h-20'>
				<span>SPLI</span>
				<span>TTER</span>
			</div>

			{/* body  height : 100vh- 28px + 80px + 32px */}
			<section className='rounded-t-large desktop:rounded-b-large desktop:w-[920px] mx-auto shadow-lg relative bg-white mt-8 p-8 overflow-auto flex flex-wrap flex-col desktop:flex-row gap-8'>
				<div className='desktop:flex-1'>
					<div className='space-y-4'>
						<Title title='Bill' />
						<Input
							prefixIcon={'$'}
							value={bill}
							onChange={handleOnChangeBill}
						/>
					</div>
					<div className='space-y-4'>
						<Title title='Select tip %' />
						<div className='grid grid-cols-2 gap-2.5'>
							<Button
								title='5%'
								isActive={currentTips === 5}
								onClick={() => handleSelectTips(5)}
							/>
							<Button
								title='10%'
								isActive={currentTips === 10}
								onClick={() => handleSelectTips(10)}
							/>
							<Button
								title='15%'
								isActive={currentTips === 15}
								onClick={() => handleSelectTips(15)}
							/>
							<Button
								title='25%'
								isActive={currentTips === 25}
								onClick={() => handleSelectTips(25)}
							/>
							<Button
								title='50%'
								isActive={currentTips === 50}
								onClick={() => handleSelectTips(50)}
							/>
							<input
								type='number'
								className='focus:outline-strong-cyan rounded-small flex justify-between bg-very-light-grayish-cyan h-8 w-full p-4 text-right font-bold text-dark-cyan placeholder:text-grayish-cyan '
								placeholder='Custom'
								onChange={handleCustomTip}
								value={customTip}
							/>
						</div>
					</div>
					<div className='space-y-4'>
						<Title title='Number of people' />
						<Input
							prefixIcon={
								<img
									src={IconPerson}
									alt='icon person'
									className='mt-1'
								/>
							}
							value={person}
							onChange={handleOnChangePerson}
						/>
					</div>
				</div>

				<Summary.CardItem>
					<div className='flex justify-between items-center'>
						<Summary.TitleItem
							title='Tip Amount'
							description='/ person'
						/>
						<Summary.NumberItem value={calTipAmountPerPerson()} />
					</div>
					<div className='flex justify-between items-center desktop:mb-auto'>
						<Summary.TitleItem
							title='Total'
							description='/ person'
						/>
						<Summary.NumberItem value={calTotalAmountPerPerson()} />
					</div>
					<Button
						className='w-full'
						isActive={!isDisable}
						title='Reset'
						onClick={() => handleReset()}
					/>
				</Summary.CardItem>

				{/* footer */}
				<div className='text-[12px] text-center desktop:fixed desktop:bottom-0 desktop:right-0 text-[#3e52a3]'>
					Challenge by{' '}
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						className='underline'
						target='_blank'>
						Frontend Mentor
					</a>
					. Coded by{' '}
					<a
						href='#'
						className='underline'>
						Michel Phung
					</a>
					.
				</div>
			</section>
		</section>
	);
}
export default App;
