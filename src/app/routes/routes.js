'use strict';
angular.module('routes', [
  'core',
  'modules',
  'ui.router'
]).constant('ROUTESURL', 'app/routes/')
  .constant('URLMAP', {
    'home'  : '/',
    'search': 'search'
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        template: '<ui-view></ui-view>',
        // resolve: {
        //   appResolve: function(globalResolve){
        //     console.log('app resolve')
        //     return globalResolve;
        //   }
        // }
      })
    $urlRouterProvider.otherwise('/');
  })
  .factory('globalResolve', function($q, fetchUserFromClient){
    // invoke the promises straight away, only happens once per page load
    //  i.e. doesn't happen after each route change
    return $q.all([fetchUserFromClient()])
  })
  .run(function(globalResolve, $rootScope, User, $state){
    // Authentication Solution
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams){
      if (!toState.publicRoute) {
        globalResolve.then(function(){
          if (User.get('isAdmin') != true )
            $state.transitionTo('root.signin')
        })
      }
    })
  })