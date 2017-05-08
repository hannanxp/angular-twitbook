angular.module('myApp', ['ui.router']);

angular.module('myApp').config(['toolboxProviderStyleProvider', 
  function (toolboxProviderStyleProvider) {
    
    toolboxProviderStyleProvider.setName('Wgeeks');

  }
]);
