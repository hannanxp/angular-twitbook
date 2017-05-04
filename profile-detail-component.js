angular.module('myApp').component('profileDetail', {
  templateUrl: 'profile-detail-template.html',
  controller: function profileDetailCtrl($routeParams) {
    var self = this;
    
    self.userId = $routeParams.userId;
    self.userName = "Some One";
  }
});