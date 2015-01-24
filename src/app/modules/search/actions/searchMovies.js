angular.module('search')
  .factory('searchMovies', function(
    PaginatedMovies,
    moviesGateway
  ){
    return function(keywords, pagination){
      return moviesGateway.search(keywords, pagination)
        .then(function(response){
          PaginatedMovies.set(response.data.movies)
          PaginatedMovies.total = response.data.total;
        })
    }
  });