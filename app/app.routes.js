angular.module('myApp').config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
  function ($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider.hashPrefix('');

    // no route goes to index
    $urlRouterProvider.when('', '/');

    $stateProvider
            .state({
              name: 'home',
              url: '/',
              templateUrl: 'app/states/home/home.template.html',
              controller: "homeController", // This view will use homeController loaded below in the resolve
              resolve: {
                f1: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('app/states/home/home.controller.js');
                  }]
              }
            })
            .state({
              name: 'myprofile',
              url: '/myprofile',
              templateUrl: 'app/states/myprofile/myprofile.template.html',
              controller: "myprofileController", 
              resolve: {
                f1: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/states/myprofile/myprofile.controller.js');
                  }]
              }
            })
            .state({
              name: 'friends',
              url: '/friends',
              templateUrl: 'app/states/friends/friends.template.html',
              controller: "friendsController", 
              resolve: {
                f1: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/states/friends/friends.controller.js');
                  }]
              }
            })
            .state({
              name: 'profile',
              url: '/profile/:userId',
              templateUrl: 'app/states/profile/profile.template.html',
              controller: "profileController", 
              resolve: {
                f1: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/states/profile/profile.controller.js');
                  }]
              }
            })
            ;

  }
]);