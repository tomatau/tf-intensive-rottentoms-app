angular.module('search', [
  'core'
])
.config(function(iocMapProvider){
  iocMapProvider.map({
    'moviesGateway': 'httpMoviesGateway'
  })
})
.constant('SEARCHURL', 'app/modules/search/')