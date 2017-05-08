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
              controller: "homeController"
            })
            .state({
              name: 'myprofile',
              url: '/myprofile',
              templateUrl: 'app/states/myprofile/myprofile.template.html',
              controller: "myprofileController"
            })
            .state({
              name: 'friends',
              url: '/friends',
              templateUrl: 'app/states/friends/friends.template.html',
              controller: "friendsController"
            })
            .state({
              name: 'profile',
              url: '/profile/:userId',
              templateUrl: 'app/states/profile/profile.template.html',
              controller: "profileController"
            })
            ;

  }
]);