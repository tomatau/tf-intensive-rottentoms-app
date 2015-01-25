angular.module('config', [])
  // config module is highest level... can be depended on by anything...!
  .value('LOCAL_CONFIG', false) // placeholder value for overwriting - won't break if we don't
  .constant('NAVIGATION',{
    guestNav:[
      { name: 'signin', path: 'signin', label: 'Signup' }
    ],
    userNav: [
      { name: 'home', path: 'home', label: 'Home' },
      { name: 'search', path: 'search', label: 'Search' },
    ]
  })
  // Locale file locations?
  // Default locale?
  // API BAse Endpoint?