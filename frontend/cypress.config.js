const { defineConfig } = require('cypress');
const webpackConfig = require('./config/webpack.cypress.config');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    specPattern: ['src/component-tests/*.cy.{js,jsx}'],
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

      const options = { webpackOptions: webpackConfig, watchOptions: {} };
      on('file:preprocessor', webpackPreprocessor(options));

      return config;
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

      return config;
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // змініть на ваш локальний сервер
    specPattern: ['src/e2e-tests/*.cy.{js,jsx}'],
  },
});
