angular.module('search')
  .factory('PaginatedMovies', function(BaseCollection){
    var PaginatedMovies = BaseCollection.extend({
      total: 0,
    })
    return new PaginatedMovies();
  });