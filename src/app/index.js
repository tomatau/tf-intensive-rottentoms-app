'use strict';
// application module is lowest level... uses anything!
// mainly just loads in routes though really
angular.module('tfIntensiveRottentomsApp', [
    'config', 'core', 'routes', 'navbar'
  ])
  .run(function(
    $rootScope,
    LOCAL_CONFIG,
    NAVIGATION,
    User
  ){
    if (LOCAL_CONFIG)// do env specific stuff
      console.info('Current Local Config:', LOCAL_CONFIG)

    $rootScope.user = User.get();
    $rootScope.navigation = NAVIGATION.guestNav;
    // suitable watch, keep logic in view - although the directive still watches
    $rootScope.$watch('user.isLoggedIn', function(isLoggedIn){
      $rootScope.navigation = (isLoggedIn) ? NAVIGATION.userNav : NAVIGATION.guestNav;
    });
  });
