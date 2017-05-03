angular.module('myApp', ['ngRoute']);

//service style, probably the simplest one
/**
 * Syntax: module.service( 'serviceName', function ); 
 * Result: When declaring serviceName as an injectable argument, 
 * you will be provided with an instance of the function. 
 * In other words new FunctionYouPassedToService().
 */
angular.module('myApp').service('toolboxServiceStyle', function () {
  this.sayHello = function () {
    var x = "You";
    return "Hello, " + x + "!";
  };
  this.getTime = function () {
    var d = new Date();
    return d.toLocaleString();
  };
});

//factory style, more involved but more sophisticated
/**
 * Syntax: module.factory( 'factoryName', function ); 
 * Result: When declaring factoryName as an injectable argument,
 * you will be provided with the "value" 
 * that is returned by invoking the function reference passed to module.factory.
 */
angular.module('myApp').factory('toolboxFactoryStyle', function () {
  return {
    sayHello: function () {
      var x = "You";
      return "Hello, " + x + "!";
    },
    getTime: function () {
      var d = new Date();
      return d.toLocaleString();
    }
  };
});

//provider style, full blown, configurable version     
/**
 * Syntax: module.provider( 'providerName', function ); 
 * Result: When declaring providerName as an injectable argument,
 * you will be provided with (new ProviderFunction()).$get(). 
 * The constructor function is instantiated before the $get method is called
 * ProviderFunction is the function reference passed to module.provider.
 */
angular.module('myApp').provider('toolboxProviderStyle', function () {

  this.name = 'You';

  this.$get = function () {
    var name = this.name;
    return {
      sayHello: function () {
        var x = name;
        return "Hello, " + x + "!";
      },
      getTime: function () {
        var d = new Date();
        return d.toLocaleString();
      }
    };
  };

  this.setName = function (name) {
    this.name = name;
  };
});

//hey, we can configure a provider!            
/**
 * note the use of 'xxxProvider'!
 */
angular.module('myApp').config(['toolboxProviderStyleProvider', '$locationProvider', '$routeProvider',
  function (toolboxProviderStyleProvider, $locationProvider, $routeProvider) {

    toolboxProviderStyleProvider.setName('Wgeeks');

    $locationProvider.hashPrefix('');

    $routeProvider.
            when('/', {
              template: 'HELLO'
            }).when('/myprofile', {
              template: '<p>MY PROFILE</p>'
            }).when('/friends', {
              template: '<p>FRIENDS</p>'
            }).when('/profile/:userId', {
              template: '<p>PROFILE X</p>'
            }).
            otherwise('/');
  }
]);
