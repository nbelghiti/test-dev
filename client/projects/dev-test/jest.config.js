module.exports = {
  modulePathIgnorePatterns: [
    '<rootDir>/projects/(?!dev-test).*',
  ],
  moduleNameMapper: {
	'^~(.*)$': '<rootDir>/projects/dev-test/src/app$1',
	'^adb-test(.*)$': '<rootDir>/projects/dev-test/src/test$1',
  },
};
