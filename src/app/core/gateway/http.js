angular.module('core')
  .value('API_BASE_URL', null) // place-holder for configuration settings
  .value('API_KEY', null)
  .factory('httpGateway', function(
    $http,
    API_BASE_URL,
    API_KEY
  ){
    function checkDep(){
      if (_.isEmpty(API_BASE_URL)) throw Error('http requires API_BASE_URL');
      if (_.isEmpty(API_KEY)) throw Error('http requires API_KEY');
    }

    function request(options){
      checkDep();
      return $http(_.defaults({}, options, {
        cache: true,
      })).error(function(e){ console.error(e) });
    }

    return {
      jsonp: function(endpoint, params){
        return request({
          method: 'JSONP',
          url: API_BASE_URL + endpoint,
          params: _.defaults({}, params || {}, {
            apikey: API_KEY,
            callback: 'JSON_CALLBACK'
          })
        })
      },
    }
  })