angular.module('myApp', []);

//service style, probably the simplest one
angular.module('myApp').service('toolboxServiceStyle', function () {
  this.getTime = function () {
    var d = new Date();
    return d.toLocaleString();
  };
});

//factory style, more involved but more sophisticated
angular.module('myApp').factory('toolboxFactoryStyle', function () {
  return {
    getTime: function () {
      var d = new Date();
      return d.toLocaleString();
    }
  };
});

