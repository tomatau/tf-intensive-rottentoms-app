'use strict';
angular.module('routes', [
  // 'core',
  // 'models',
  // 'forms',
  // 'useCases',
  'ui.router'
]).constant('ROUTESURL', 'app/routes/')
  .constant('URLMAP', {
    'home' : '/'
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })
  .factory('globalResolve', function($q){
    return $q.all([])
  })