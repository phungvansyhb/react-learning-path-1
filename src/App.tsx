import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Title from './components/Title';
import IconPerson from '/images/icon-person.svg';
import Summary from './components/Summary';

function App() {
	const [currentTips, setCurrentTips] = useState(10);
	return (
		<section className='bg-light-grayish-cyan min-h-screen font-space-mono pt-7'>
			{/* app logo height 80px */}
			<div className='text-center *:tracking-[8px] *:text-dark-cyan *:text-[24px] *:font-bold *:block h-20'>
				<span>SPLI</span>
				<span>TTER</span>
			</div>

			{/* body  height : 100vh- 28px + 80px + 32px */}
			<section className='rounded-t-large desktop:rounded-b-large  desktop:w-[920px] mx-auto shadow-lg relative bg-white mt-8 p-8 overflow-auto flex flex-col desktop:flex-row gap-8'>
				<div className='desktop:flex-1'>
					<div className='space-y-4'>
						<Title title='Bill' />
						<Input prefixIcon={'$'} />
					</div>
					<div className='space-y-4'>
						<Title title='Select tip %' />
						<div className='grid grid-cols-2 gap-2.5'>
							<Button
								title='5%'
								isActive={currentTips === 5}
							/>
							<Button
								title='10%'
								isActive={currentTips === 10}
							/>
							<Button
								title='15%'
								isActive={currentTips === 15}
							/>
							<Button
								title='25%'
								isActive={currentTips === 25}
							/>
							<Button
								title='50%'
								isActive={currentTips === 50}
							/>
							<button
								className={
									'rounded-small h-8 font-bold bg-very-light-grayish-cyan text-grayish-cyan'
								}>
								Custom
							</button>
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
						/>
					</div>
				</div>

				<Summary.CardItem>
					<div className='flex justify-between items-center'>
						<Summary.TitleItem
							title='Tip Amount'
							description='/ person'
						/>
						<Summary.NumberItem value='4.27' />
					</div>
					<div className='flex justify-between items-center desktop:mb-auto'>
						<Summary.TitleItem
							title='Total'
							description='/ person'
						/>
						<Summary.NumberItem value='32.79' />
					</div>
					<Button
						className='w-full'
						isActive
						title='15%'></Button>
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
