var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var rjs = require('gulp-requirejs');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var notifier = new require('node-notifier')();
var _ = require('lodash');
var karma = require('karma').server;

// --------------------------------------------------
// LESS

var getFileNameFromErrorMessage = function(errorMessage) {
  var filePathWithoutSuffix = errorMessage.split('.less')[0];
  var filePathWithougSuffixSplit = filePathWithoutSuffix.split('/');
  return filePathWithougSuffixSplit[filePathWithougSuffixSplit.length-1];
}

var getLineNumberFromErrorMessage = function(errorMessage) {
  return errorMessage.split('line no.')[1].replace(' ', '');
}

var onLessError = function (err) {
  gutil.log(gutil.colors.red('Less Error: ' + err.message));
  notifier.notify({
      title: 'Less Error',
      message: getFileNameFromErrorMessage(err.message) + '.less - line ' + getLineNumberFromErrorMessage(err.message)
  });
};

gulp.task('less', function () {
  gulp.src('app/less/_html5-boilerplate.less')
    .pipe(plumber({
      errorHandler: onLessError
    }))
    .pipe(less({
        compress: true
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('app/css'));
});

// --------------------------------------------------
// REQUIRE JS

gulp.task('requireJS', function() {
  rjs({
    name: 'main',
    baseUrl: 'app/src/',
    out: 'main-min.js',
    mainConfigFile: 'app/src/main.js',
    shim: {}
  })
  .pipe(gulp.dest('./app/src'));
});

// --------------------------------------------------
// TESTS

var karmaConfigReader = {
  set: function(value) {
    karmaCommonConf = value;
    karmaCommonConf.logLevel = 'INFO';
  }
}

var karmaConfig = require('./karma.conf.js');
karmaConfig(karmaConfigReader);

gulp.task('test', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}),
    function(output){
      if(output) {
        notifier.notify({
            title: 'Tests failed',
            message: 'You did a bad!'
        });
      }
      done();
    });
});

// --------------------------------------------------
// DEFAULT

gulp.task('develop', ['less', 'test']);
gulp.task('deploy', ['develop', 'requireJS']);
gulp.task('default', ['develop'], function(){
  
  gulp.watch('app/less/**/*.*', function() {
    gulp.run('less');
  });

  gulp.watch(['app/src/**/*.*', 'test/**/*.*'], function() {
    gulp.run('test');
  });

});