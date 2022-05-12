const theme = require("./tailwind.theme");

const content = process.env.TAILWIND_INCLUDE_DOCS
	? ["./projects/**/*.{html,scss}"]
	: ["./src/**/*.{html,scss}"];

module.exports = {
	content,
	presets: [],
	darkMode: "media", // or 'class'
	theme: {
		...theme,
	},
	variantOrder: [
		"first",
		"last",
		"odd",
		"even",
		"visited",
		"checked",
		"empty",
		"read-only",
		"group-hover",
		"group-focus",
		"focus-within",
		"hover",
		"focus",
		"focus-visible",
		"active",
		"disabled",
	],
	plugins: [],
};
