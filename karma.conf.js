module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      { pattern: 'test/*.js', watched: false },
    ],

    preprocessors: {
      'test/*.js': [ 'webpack' ],
      'test/**/*.js': [ 'webpack' ]
    },

    webpack: {
      bail: true
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },
    browsers: ['ChromeHeadless']
  })
}
