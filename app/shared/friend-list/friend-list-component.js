angular.module('myApp').component('friendList', {
  templateUrl: 'app/shared/friend-list/friend-list-template.html',
  controller: function twitController($http) {
    var self = this;
    
    self.friends = [
      {
        id: 2,
        name: "Cras justo odio"
      },
      {
        id: 3,
        name: "Dapibus ac facilisis in"
      },
      {
        id: 4,
        name: "Morbi leo risus"
      },
      {
        id: 5,
        name: "Porta ac consectetur ac"
      },
      {
        id: 6,
        name: "Vestibulum at eros"
      }
    ];

  }
});