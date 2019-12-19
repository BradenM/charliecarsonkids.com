module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/global-styles.js',
    '!app/*/*/Loadable.{js,jsx}',
    '!app/*/*/loadable.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      // TODO: Increase Coverage after Setup
      statements: 90,
      branches: 80,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'app', 'app/components/'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
    '<rootDir>/internals/testing/register-context.js',
  ],
  setupFiles: ['raf/polyfill', 'jest-canvas-mock'],
  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: [],
};
