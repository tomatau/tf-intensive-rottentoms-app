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
        controller: 'SearchCtrl'
      });
  })
  .controller('SearchCtrl', function(searchMovies){
    var vm = this;
    console.log(searchMovies)
    searchMovies('Jaws')
      .then(function(r){
        console.log('complete', r)
      })
  })