angular.module('myApp', ['ui.router', 'oc.lazyLoad', 'angular-storage']);

angular.module('myApp').config(['toolboxProviderStyleProvider', 
  function (toolboxProviderStyleProvider) {
    
    toolboxProviderStyleProvider.setName('Wgeeks');

  }
]);
