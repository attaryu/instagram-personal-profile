/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			gridTemplateRows: {
				"1/2": "1fr, 2.8fr",
			},
			colors: {
				one: "#F58529",
				two: "#FEDA77",
				three: "#DD2A7B",
				four: "#8134AF",
				five: "#515BD4",
			},
		},
	},
	plugins: [require("autoprefixer")],
};
