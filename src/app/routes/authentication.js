angular.module('routes')

  .run(function(globalResolve, $rootScope, User, $state, $stateParams, cfpLoadingBar){
    // Authentication Solution
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      // cfpLoadingBar.start();
      if (toState.publicRoute) { return true }
      event.preventDefault();
      globalResolve.then(function(){
        if (User.isLoggedIn() != true )
          $state.transitionTo('root.signin')
        else
          $state.transitionTo(toState.name, toParams, { notify: false }).then(function(){
            // must broadcast here as uiRouter views expect this event
            $rootScope.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams)
          })
      })
    })

    $rootScope.$on('$stateChangeSuccess', function(){
      // cfpLoadingBar.complete();
    })
  });