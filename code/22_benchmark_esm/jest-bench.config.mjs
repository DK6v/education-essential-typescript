export default {
  testEnvironment: 'jest-bench/environment',
  roots: ['<rootDir>/dist'],
  testMatch: ['**/__benchmarks__/?(*.)(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
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
