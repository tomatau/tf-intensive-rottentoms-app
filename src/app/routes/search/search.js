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
  .controller('SearchCtrl', function(){
    var vm = this;
  })