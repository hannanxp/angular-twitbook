angular.module('myApp').controller('ToolboxCtrl', ['$scope','toolboxServiceStyle','toolboxFactoryStyle','toolboxProviderStyle','$rootScope',
  function ($scope, toolboxServiceStyle, toolboxFactoryStyle, toolboxProviderStyle, $rootScope) {
    var d = new Date();

    $scope.timeFromController = d.toLocaleString();
    
    $scope.timeFromService = toolboxServiceStyle.getTime();
    $scope.timeFromFactory = toolboxFactoryStyle.getTime();
    $scope.timeFromProvider = toolboxProviderStyle.getTime();

    //$scope.greetingText = toolboxServiceStyle.sayHello();
    //$scope.greetingText = toolboxFactoryStyle.sayHello();
    $scope.greetingText = toolboxProviderStyle.sayHello();
    
    $scope.userName = "Budi";
    $rootScope.userDepartement = "Developer";
    
  }]);


angular.module('myApp').controller('OrganizationCtrl', ['$scope',
  function ($scope) {
    
    $scope.userNames = ['Ali', 'Agus', 'Budi', 'Cucun', 'Heni', 'Yulianto'];
    
  }]);