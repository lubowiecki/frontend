const theme = require("./tailwind.theme");

module.exports = {
	content: ["./src/**/*.{html,scss}"],
	theme: {
		...theme,
	},
	plugins: [],
};
