// Karma configuration file
var karma = require('karma');

module.exports = function (karma) {
  var config = {
    singleRun: true,
    autoWatch: false,
    autoWatchInterval: 0,

    // level of logging
    // possible values: LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG
    logLevel: "warn",
    // possible values: 'dots', 'progress'
    reporters: 'dots',
    colors: true,

    port: 8080,

    // base path, that will be used to resolve files and exclude
    basePath: '.',

    // Start these browsers, currently available:
    // Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
    browsers: ['ChromeHeadless'],

    frameworks: ['jasmine'],

    plugins: [
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],

    webpack: {
      devtool: 'eval',

      resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.ts']
      },

      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: "ts-loader",
            options: {
              configFile: "test/tsconfig.json",
            }
          }
        ]
      },

    },

    webpackMiddleware: {
      stats: { chunks: false },
    },

    files: ['test/index.js'],

    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap'],
    },

  };

  karma.set(config);
};

