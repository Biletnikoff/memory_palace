
angular.module('palace.services', [])

.factory('', function ($http) {

  var addOne = function(url) {
    return $http({
      method: 'POST',
      url: '/api/decks',
      data: url
    }).then(function(resp) {

      return resp;
    });
  };

    var getAll = function() {
      return $http({
        method: 'GET',
        url: '/api/decks',
      }).then(function(resp) {
        return resp.data;
      });
    };

    return {
      getAll: getAll,
      addOne: addOne
    };

  })
