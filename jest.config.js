module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  moduleNameMapper: {
    '^@element/(.*)$': '<rootDir>/src/components/element/$1',
  },
};
