'use strict';
angular.module('routes')
  .config(function(
    $stateProvider,
    URLMAP,
    ROUTESURL
  ){
    $stateProvider
      .state('search', {
        url: URLMAP.search,
        templateUrl: ROUTESURL + 'search/search.tmpl.html',
        controllerAs: 'search',
        controller: 'SearchCtrl'
      });
  })
  .controller('SearchCtrl', function(
    searchMovies,
    PaginatedMovies
  ){
    var vm = this;
    vm.searchResults = PaginatedMovies.get();
    vm.searchTotal = PaginatedMovies.total;
    vm.pagination = PaginatedMovies.pagination;
    vm.entity = { keyword: "Jaws" }
    vm.submitSearch = function(){
      return searchMovies(vm.entity.keyword, { page: 2 })
    }
  })