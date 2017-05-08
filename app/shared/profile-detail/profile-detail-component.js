angular.module('myApp').component('profileDetail', {
  templateUrl: 'app/shared/profile-detail/profile-detail-template.html',
  controller: function profileDetailCtrl($stateParams) {
    var self = this;
    
    self.userId = $stateParams.userId;
    self.userName = "Some One";
    
    self.timeStamp = new Date().getTime();
  }
});