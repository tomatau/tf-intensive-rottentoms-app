angular.module('search')

  /**
   * These two constants may be subject to duplication..
   *
   * So we have a number of options:
   *   1. They live inside the core as it is central logic
   *   2. We make a new layer for endpoints if we plan on swapping them for others a lot
   *     e.g. we might want to swap the endpoint for our whole application
   *   3. We make a new parent module called 'rotten toms' and assume our logic is specific to rotten toms
   *
   * I prefer 1 or 2 depending on how the project will grow
   * 1. is nice and simple but moves the endpoint to a very high level...
   * 2. is more architecturally sound but still quite high level - allows for nice swapping
   *   - also more work to wire it up... but nice
   *
   * This application currently uses option 1 and the higher level configuration file setsup API settings globally
   */
  .constant('SEARCH_ENDPOINT', 'movies.json')

  .factory('httpMoviesGateway', function(
    httpGateway,
    SEARCH_ENDPOINT
  ){
    return {
      search: function(keywords, params){
        return httpGateway.jsonp(SEARCH_ENDPOINT, _.defaults({}, params, {
          q: keywords
        }))
      }
    }
  })