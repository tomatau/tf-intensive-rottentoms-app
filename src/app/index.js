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
    // suitable watch, keep logic in view - although the directive still watches
    $rootScope.$watch('user.isAdmin', function(isAdmin){
      $rootScope.navigation = (isAdmin) ? NAVIGATION.userNav : NAVIGATION.guestNav;
    });
  });
