/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			mobile: "375px",
			desktop: "1440px",
		},
		extend: {
			colors: {
				'strong-cyan': '#26C0AB',
				'dark-cyan': '#00494D',
				'dark-grayish-cyan': '#5E7A7D',
				'light-grayish-cyan': '#C5E4E7',
				'grayish-cyan': '#7F9C9F',
				'very-light-grayish-cyan': '#F4FAFA',
			},
			fontFamily: {
				'space-mono': ['Space Mono', 'monospace'],
			},
			borderRadius: {
				large: '24px',
				medium: '12px',
				small: '4px',
			},
		},
	},
	plugins: [],
};
