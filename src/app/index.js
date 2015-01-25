'use strict';
// application module is lowest level... uses anything!
// mainly just loads in routes though really
angular.module('tfIntensiveRottentomsApp', [
  'config',
  'core',
  'routes',
  'navbar'
])
.value('isAdmin', false)
.run(function(
  $rootScope,
  GUEST_ROUTES,
  USER_ROUTES,
  LOCAL_CONFIG,
  isAdmin
){
  if (LOCAL_CONFIG.env) {// do env specific stuff
    console.log(LOCAL_CONFIG)
  }
  $rootScope.navigation = (isAdmin) ? USER_ROUTES : GUEST_ROUTES;
});
