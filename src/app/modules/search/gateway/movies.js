angular.module('search')
  .constant('API_KEY', 'nd3uzzypjhqxjqhujpqukdsu')
  .constant('SEARCH_ENDPOINT', 'http://api.rottentomatoes.com/api/public/v1.0/movies.json')
  .factory('moviesGateway', function(
    $http,
    API_KEY,
    SEARCH_ENDPOINT
  ){
    return {
      search: function(keywords, params){
        return $http.jsonp(SEARCH_ENDPOINT, {
          params: _.defaults(params || {}, {
            q: keywords,
            api_key: API_KEY,
            callback: 'JSON_CALLBACK'
          })
        })
      }
    }
  })