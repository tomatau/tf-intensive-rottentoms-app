'use strict';

angular.module('tfIntensiveRottentomsApp', [
  'core',
  'routes',
  'navbar'
  // 'mgcrea.ngStrap'
])
.run(function(
  $rootScope,
  GUEST_ROUTES,
  USER_ROUTES
){
  var isAdmin = true;
  $rootScope.navigation = (isAdmin) ? USER_ROUTES : GUEST_ROUTES;
});
