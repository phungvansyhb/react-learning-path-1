import Input from './components/Input';
import Title from './components/Title';

function App() {
	return (
		<section className='bg-light-grayish-cyan min-h-screen font-space-mono py-7'>
			{/* app logo height 80px */}
			<div className='text-center *:tracking-[8px] *:text-dark-cyan *:text-[24px] *:font-bold *:block h-20'>
				<span>SPLI</span>
				<span>TTER</span>
			</div>

			{/* body  height : 100vh- 28px + 80px + 32px */}
			<section className='rounded-t-large relative bg-white mt-8 h-[calc(100dvh-140px)] p-8 overflow-auto'>
				<Title title='Bill' />
				<Input prefixIcon={'x'} />
				{/* footer */}
				<div className='text-[12px] text-center text-[#3e52a3] absolute bottom-0 left-0 '>
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
