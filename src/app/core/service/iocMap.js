'use strict';
angular.module('core')
  .provider('iocMap', function($provide) {
    // create a factory for each injectable in dependencyMap
    this.map = function(dependencyMap) {
      _.each(dependencyMap, function(source, target) {
        var injectFn = function(v) { return v; };
        injectFn.$inject = [source];
        $provide.factory(target, injectFn);
      });
    }
    this.$get = function(){};
  });