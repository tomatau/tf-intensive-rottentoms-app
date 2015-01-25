angular.module('search')
  .factory('PaginatedMovies', function(BaseCollection){
    var PaginatedMovies = BaseCollection.extend({
      total: 0,
      pagination: {},
      setPagination: function(pagination){
        this.resetPagination();
        angular.extend(this.pagination, pagination);
      },
      resetPagination: function(){
        // keep reference but clear all properties
        for (var member in this.pagination) delete this.pagination[member];
      }
    })
    return new PaginatedMovies();
  });