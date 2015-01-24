'use strict';
/**
 * Basic list for managing state
 * don't use directly
 */
angular.module('core')
  .factory('BaseCollection', function(extendPrototype) {
    function BaseCollection(){
      this.list = [];
    }

    BaseCollection.prototype.get = function(id) {
      return ( id != null ) ? this.find({ id: id }) : this.list;
    };

    BaseCollection.prototype.add = function(item) {
      this.list.push(item);
    };

    BaseCollection.prototype.set = function(newList) {
      this.reset();
      angular.extend(this.list, newList);
    };

    BaseCollection.prototype.reset = function() {
      this.list.length = 0;
    };

    _.each([ // lodash Methods
      'where'
      ,'find'
      ,'filter'
      ,'forEach'
      ,'map'
      ,'max'
      ,'min'
      ,'pluck'
      ,'sortBy'
      ,'reject'
      ,'remove'
    ], function(method, idx){
      BaseCollection.prototype[method] = function(){
        var args = Array.prototype.slice.call(arguments, 0);
        return _[method].apply(_, [this.list].concat(args));
      }
    });

    BaseCollection.extend = extendPrototype;
    return BaseCollection;
  })
;