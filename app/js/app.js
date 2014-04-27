define([
  'angular',
  'angularAnimate',
  'root/RootModule'
  ], function (
    angular,
    angularAnimate,
    RootModule
  ) {
      'use strict';
      
      return angular.module('app', [
        'ngAnimate',
        'root'
      ])
});