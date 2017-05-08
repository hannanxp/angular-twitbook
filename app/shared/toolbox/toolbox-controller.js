angular.module('myApp').controller('ToolboxCtrl', ['$scope','toolboxServiceStyle','toolboxFactoryStyle','toolboxProviderStyle',
  function ($scope, toolboxServiceStyle, toolboxFactoryStyle, toolboxProviderStyle) {
    var d = new Date();

    $scope.timeFromController = d.toLocaleString();
    
    $scope.timeFromService = toolboxServiceStyle.getTime();
    $scope.timeFromFactory = toolboxFactoryStyle.getTime();
    $scope.timeFromProvider = toolboxProviderStyle.getTime();

    //$scope.greetingText = toolboxServiceStyle.sayHello();
    //$scope.greetingText = toolboxFactoryStyle.sayHello();
    $scope.greetingText = toolboxProviderStyle.sayHello();
  }]);