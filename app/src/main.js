require.config({

  // Define paths
  paths: {
    'text': '../bower_components/requirejs-text/text',
    'domReady': '../bower_components/requirejs-domready/domReady',
    'angular': '../bower_components/angular/angular',
    'angularRoute': '../bower_components/angular-route/angular-route',
    'angularSanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angularAnimate': '../bower_components/angular-animate/angular-animate',
    'tweenmax': '../bower_components/greensock/src/uncompressed/TweenMax',
    'jquery': '../bower_components/jquery/jquery',
    'underscore': '../bower_components/underscore/underscore'
  },

  // Shim those pesky non-AMD libraries
  shim: {
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    },
    'angularRoute': {
      exports: 'angularRoute',
      deps: ['angular']
    },
    'angularSanitize': {
      exports: 'angularSanitize',
      deps: ['angular']
    },
    'angularAnimate': {
      exports: 'angularAnimate',
      deps: ['angular']
    },
    'tweenmax': {
      exports: 'TweenMax'
    },
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    }
  },

  deps: ['./bootstrap']

});