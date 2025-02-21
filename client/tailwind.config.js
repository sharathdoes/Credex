/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  './src/**/*.{js,ts,jsx,tsx}', // Scanning your source files for Tailwind classes
	  './components/**/*.{js,ts,jsx,tsx}', // Including components
	  './pages/**/*.{js,ts,jsx,tsx}', // If you have a `pages` directory for Next.js or similar
	],
	theme: {
	  extend: {
		colors: {
		  primary: "2596be",
		  dark: {
			100: '#1a1a1a',
			200: '#242424',
			300: '#2d2d2d'
		  },
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  }