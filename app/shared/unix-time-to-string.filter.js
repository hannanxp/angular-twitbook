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