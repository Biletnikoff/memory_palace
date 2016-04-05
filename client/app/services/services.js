
angular.module('palace.services', [])

.factory('', function ($http) {

  var addOne = function(url) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: url
    }).then(function(resp) {

      return resp;
    });
  };

    var getAll = function() {
      return $http({
        method: 'GET',
        url: '/api/links',
      }).then(function(resp) {
        return resp.data;
      });
    };

    return {
      getAll: getAll,
      addOne: addOne
    };

  })
