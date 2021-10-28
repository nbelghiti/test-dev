module.exports = {
	globals: {
		"TZ": "UTC",
		"ts-jest": {
			"allowSyntheticDefaultImports": true
		}
	},
	transformIgnorePatterns: [
		// `<rootDir>/node_modules/(?!${esModules})`
	],
	transform: {
		"^.+\\.js$": "babel-jest"
	},
	maxWorkers: 1,
};
