/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		"./themes/**/layouts/**/*.html",
		"./content/**/layouts/**/*.html",
		"./layouts/**/*.html",
		"./content/**/*.html",
		"./content/**/*.md"
	],
	theme: {
		fontFamily: {
			'sans' : [
				'"Poppins"',
				'"Inter"',
				'-apple-system',
				'BlinkMacSystemFont',
				'avenir next',
				'avenir',
				'segoe ui',
				'helvetica neue',
				'helvetica',
				'Cantarell',
				'Ubuntu',
				'roboto',
				'noto',
				'arial',
				'sans-serif'
			],
		},
		extend: {
		},
	},
	plugins: [],
	variants: ['group-hover'],
};
