angular.module('myApp').controller('myprofileController', ['$scope', '$http',
  function ($scope, $http) {

    $scope.user = {};

    $scope.saveUser = function () {
      console.log("Form:", $scope.form);
      console.log("User:", $scope.user);
    };

    $scope.resetForm = function (form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.user = {};
    };


  }]);