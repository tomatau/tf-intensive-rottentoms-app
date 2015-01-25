angular.module('search')
  .value('paginationDefaults', { page_limit: 10 }) // rotten toms default is 30
  .factory('searchMovies', function(
    PaginatedMovies,
    paginationDefaults,
    moviesGateway
  ){
    return function(keywords, pagination){
      pagination = _.extend(pagination || {}, paginationDefaults);
      return moviesGateway.search(keywords, pagination)
        .then(function(response){
          PaginatedMovies.set(response.data.movies)
          PaginatedMovies.total = response.data.total;
          PaginatedMovies.setPagination(_.extend({
            total: response.data.total
          }, pagination));
        })
    }
  });