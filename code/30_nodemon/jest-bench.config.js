module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-bench/environment',
  roots: ['<rootDir>/src'],
  testRegex: '(/__benchmarks__/.*|\\.bench)\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  reporters: [
    'default',
    ['jest-bench/reporter',
      {
        withOpsPerSecond: true,
        showPercentiles: true
      }
    ],
  ],
};