module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'test/lib/angular/angular.js',
      'test/lib/angular/angular-mocks.js',
      'test/lib/globals.js',
      'app/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ]
  })};