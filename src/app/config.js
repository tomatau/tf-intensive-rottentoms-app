angular.module('config', [])
  // config module is highest level... can be depended on by anything...!
  .value('LOCAL_CONFIG', false) // placeholder value for overwriting - won't break if we don't
  .constant('NAVIGATION',{
    guestNav:[
      { name: 'root.signin', label: 'Signup' }
    ],
    userNav: [
      { name: 'root.home', label: 'Home' },
      { name: 'root.search', label: 'Search' },
    ]
  })
  // Locale file locations?
  // Default locale?
  // API BAse Endpoint?
  .constant('API_KEY', 'nd3uzzypjhqxjqhujpqukdsu')
  .constant('API_BASE_URL', 'http://api.rottentomatoes.com/api/public/v1.0/')