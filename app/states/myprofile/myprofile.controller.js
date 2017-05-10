angular.module('myApp').controller('myprofileController', ['$scope',
  function ($scope) {
    
    $scope.user = {};
    
    $scope.saveUser = function() {
      $scope.user = {};
    };
    
    
  }]);