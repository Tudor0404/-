const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				main: "#EF476F",
				accent: "#59A5D8",
				bg: "#333333",
				darkBG: "#0A0F0D",
				text: "#EAEAEA",
			},
			fontFamily: {
				sans: ["var(--font-montserrat)", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
