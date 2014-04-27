define([
    'angular',
    'root/controllers/RootController'
  ], function (
    angular,
    RootController
  ) {
    var NewsModule = angular.module('root', [])
    .controller('RootController', RootController)
    return NewsModule;
});