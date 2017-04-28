angular.module('myApp').component('twitPage', {
  templateUrl: 'twit-template.html',
  controller: function twitController() {
    var self = this;

    self.twits = [
      {
        "id": 5,
        "twit": "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "created": "2017-04-20 21:10:00"
      },
      {
        "id": 4,
        "twit": "Ut enim ad minim veniam",
        "created": "2017-04-19 15:17:00"
      },
      {
        "id": 2,
        "twit": "Consectetur adipiscing elit",
        "created": "2017-04-17 11:13:00"
      },
      {
        "id": 2,
        "twit": "Consectetur adipiscing elit",
        "created": "2017-04-17 11:13:00"
      },
      {
        "id": 1,
        "twit": "Lorem ipsum dolor sit amet",
        "created": "2017-04-16 12:35:00"
      }
    ];

    this.shareTwit = function () {
      var date = new Date();
      var ymd = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

      var d = new Date(),
              h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
              m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
      var his = h + ':' + m;

      var obj = {};
      obj.id = self.twits.length + 1;
      obj.twit = self.msg;
      obj.created = ymd + " " + his;

      this.twits.unshift(obj);
      this.msg = "";
    };
  }
});