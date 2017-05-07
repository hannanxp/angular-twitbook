angular.module('myApp', ['ui.router']);

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
angular.module('myApp').config(['toolboxProviderStyleProvider', '$locationProvider', '$stateProvider','$urlRouterProvider',
  function (toolboxProviderStyleProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

    toolboxProviderStyleProvider.setName('Wgeeks');

    $locationProvider.hashPrefix('');
    
    // no route goes to index
    $urlRouterProvider.when('', '/');

    $stateProvider
            .state({
              name: 'home',
              url: '/',
              template: '<h1>Share Your Status</h1><twit-page></twit-page>'
            })
            .state({
              name: 'myprofile',
              url: '/myprofile',
              template: '<h2>My Profile</h2>'
            })
            .state({
              name: 'friends',
              url: '/friends',
              template: '<h2>Friend List</h2>'
            })
            .state({
              name: 'profile',
              url: '/profile/:userId',
              template: '<profile-detail></profile-detail>'
            })
            ;

    /*
    $routeProvider
            .when('/', {
              template: '<h1>Share Your Status</h1><twit-page></twit-page>'
            })
            .when('/myprofile', {
              template: '<h2>My Profile</h2>'
            })
            .when('/friends', {
              template: '<h2>Friend List</h2>'
            })
            .when('/profile/:userId', {
              template: '<profile-detail></profile-detail>'
            })
            .otherwise('/');
    */
    
  }
]);


angular.module('myApp').filter('unixTimeToString', function () {
  return function (data) {
    if (angular.isUndefined(data))
      return '';
    var date = new Date(data);

    var thedate = date.toDateString();

    // Hours part from the timestamp
    var hours = date.getHours();

    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = thedate + ', ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
  };
});