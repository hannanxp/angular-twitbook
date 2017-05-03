angular.module('myApp', []);

//service style, probably the simplest one
angular.module('myApp').service('toolboxServiceStyle', function () {
  this.getTime = function () {
    var d = new Date();
    return d.toLocaleString();
  };
});

