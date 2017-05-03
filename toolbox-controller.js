angular.module('myApp').controller('ToolboxCtrl', ['$scope','toolboxServiceStyle',
  function ($scope, toolboxServiceStyle) {
    var d = new Date();

    $scope.currentTime = d.toLocaleString();
    
    $scope.timeFromService = toolboxServiceStyle.getTime();

  }]);