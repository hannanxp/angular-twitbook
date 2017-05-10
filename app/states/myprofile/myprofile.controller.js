angular.module('myApp').controller('myprofileController', ['$scope','$http',
  function ($scope, $http) {
    
    $scope.user = {};
    
    $scope.saveUser = function() {
      $http.post('server/test.json',$scope.user, function(response){
        console.log(response.data);
      });
    };
    
    
  }]);