angular.module('myApp').controller('ToolboxCtrl', ['$scope', function ($scope) {
    var d = new Date();
    
    $scope.currentTime = d.toLocaleString();
    
  }]);