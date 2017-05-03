angular.module('myApp').controller('ToolboxCtrl', ['$scope','toolboxServiceStyle','toolboxFactoryStyle',
  function ($scope, toolboxServiceStyle, toolboxFactoryStyle) {
    var d = new Date();

    $scope.currentTime = d.toLocaleString();
    
    $scope.timeFromService = toolboxServiceStyle.getTime();
    $scope.timeFromFactory = toolboxFactoryStyle.getTime();

  }]);