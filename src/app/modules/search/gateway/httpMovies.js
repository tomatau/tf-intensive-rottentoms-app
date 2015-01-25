angular.module('search')

  /**
   * These two constants may be subject to duplication..
   *
   * So we have a number of options:
   *   1. They live inside the core as it is central logic
   *   2. We make a new layer for endpoints if we plan on swapping them for others a lot
   *   3. We make a new parent module called 'rotten toms' and assume our logic is specific to rotten toms
   *
   * I prefer 1 or 2 depending on how the project will grow
   * 1. is nice and simple but moves the endpoint to a very high level...
   * 2. is more architecturally sound but still quite high level - allows for nice swapping
   *   - also more work to wire it up... but nice
   */
  .constant('API_KEY', 'nd3uzzypjhqxjqhujpqukdsu')
  .constant('SEARCH_ENDPOINT', 'http://api.rottentomatoes.com/api/public/v1.0/movies.json')

  .factory('httpMoviesGateway', function(
    $http,
    API_KEY,
    SEARCH_ENDPOINT
  ){
    return {
      search: function(keywords, params){
        return $http.jsonp(SEARCH_ENDPOINT, {
          params: _.defaults({}, params || {}, {
            q: keywords,
            apikey: API_KEY,
            callback: 'JSON_CALLBACK'
          })
        })
      }
    }
  })