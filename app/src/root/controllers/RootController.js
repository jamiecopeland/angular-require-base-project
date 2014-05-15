define([
    'angular',
    'angularRoute',
    'root/RootModule'
  ], function (
    angular,
    angularRoute,
    RootModule
  ) {

  return [
    '$scope', '$location', '$log',
  function(
    $scope, $location, $log
  ) {
    $log.log('RootController initialized');
    
  }];
});