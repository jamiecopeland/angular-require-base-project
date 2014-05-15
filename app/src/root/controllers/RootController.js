define([
    'angular',
    'angularRoute',
    'root/RootModule'
  ], function (
    angular,
    angularRoute,
    RootModule
  ) {

  var RootController = [
      '$scope', '$location', '$log',
    function(
      $scope, $location, $log
    ) {
      $log.log('RootController initialized');
      $scope.message = 'hello';
    }];

    return RootController;
});