const webpackConfig = require('./webpack.config.js');

module.exports = function karmaConfig (config) {
  config.set({

    frameworks: ['jasmine'],

    reporters: ['progress', 'coverage'],

    // Grab all files in the app folder that contain .spec.
    files: ['app/tests.webpack.js'],

    // Reference: http://webpack.github.io/docs/testing.html
    // Reference: https://github.com/webpack/karma-webpack
    // Convert files with webpack and load sourcemaps
    preprocessors: {
      'app/tests.webpack.js': ['webpack', 'sourcemap']
    },

    browsers: ['PhantomJS'],

    singleRun: true,

    webpack: webpackConfig,

    // Hide webpack build information from output
    webpackMiddleware: { noInfo: 'errors-only' }
  });
};