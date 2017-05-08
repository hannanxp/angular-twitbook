angular.module('myApp').component('profileDetail', {
  templateUrl: 'app/shared/profile-detail/profile-detail-template.html',
  controller: function profileDetailCtrl($routeParams) {
    var self = this;
    
    self.userId = $routeParams.userId;
    self.userName = "Some One";
    
    self.timeStamp = new Date().getTime();
  }
});