angular.module('tfIntensiveRottentomsApp')
  .constant('GUEST_ROUTES', [
    { name: 'login', path: 'login', label: 'Signup' }
  ])
  .constant('USER_ROUTES', [
    { name: 'home', path: 'home', label: 'Home' },
    { name: 'search', path: 'search', label: 'Search' },
  ])