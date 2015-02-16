'use strict';
/**
 * Basic model for managing state
 * don't use directly
 */
angular.module('core')
  .factory('BaseEntity', function(extendPrototype) {
    function BaseEntity() {
      this.data = {};
    }

    BaseEntity.prototype.set = function(modelData, value) {
      if (typeof modelData == "string")
        this.data[modelData] = value;
      else
        this.reset(), this.assign(this.data, modelData);
    };

    // because of keeping references here - we're at risk of mutating when not wanted.
    // but removing the reference would mean needing additional watchers
    BaseEntity.prototype.get = function(prop) {
      if (prop == null) return this.data;
      return this.data[prop];
    };

    BaseEntity.prototype.reset = function() {
      // keep reference but clear all properties
      for (var member in this.data) delete this.data[member];
    };

    _.each([ // lodash Methods
      'assign', // dangerous setter
      ,'defaults'
      ,'findKey'
      ,'forIn'
      ,'has'
      ,'keys'
      ,'keysIn'
      ,'mapValues'
      ,'merge'
      ,'omit'
      ,'pairs'
      ,'pick'
      ,'clone'
      ,'isEmpty'
      ,'isMatch'
    ], function(method, idx) {
      BaseEntity.prototype[method] = function() {
        // var args = Array.prototype.slice.call(arguments, 0);
        return _[method].apply(_, [this.data].concat(_.values(arguments)));
      }
    });

    BaseEntity.extend = extendPrototype;
    return BaseEntity;
  });