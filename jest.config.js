module.exports = {
  preset: 'ts-jest',
  testMatch: ['./tests/**/*.test.(ts|js)', '**/*.test.(ts|js)'],
  moduleFileExtensions: ['ts', 'js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__fixtures__/',
    '/tests/',
    '/(__)?mock(s__)?/',
    '/__jest__/',
    '.?.min.js',
  ],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  coverageReporters: ['text-summary'],
}
