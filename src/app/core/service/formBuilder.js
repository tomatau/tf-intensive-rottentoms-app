'use strict';
// service for creating form directives... similar to 'extending a base form'
// automatically registers validators for the form as a whole
angular.module('core')
  .factory('formBuilder', function() {
    return function(formDDO) {
      return angular.extend({}, {
        scope: {
          entity: '=entity',
          submitFn: '&submitFn'
        },
        transclude: true,
        bindToController: true,
        controllerAs: 'form',
        controller: function($scope) {
          if (this.entity == null)
            throw new Error('Form requires entity');

          var original = this.original = angular.copy(this.entity);

          this.submit = function() {
            this.submitFn()()
              .then(function() {
                $scope[formDDO.formName].$setPristine();
                $scope[formDDO.formName].$setUntouched();
              });
          };

          $scope.$watchCollection('form.entity', function validate(entity) {
            if ($scope[formDDO.formName].$pristine) {
              if (entity.id == null)
                angular.extend($scope.form.entity, formDDO.defaults);
              return true;
            }
            angular.forEach(formDDO.validators, function(fn, name) {
              $scope[formDDO.formName].$setValidity(name,
                fn(entity, original)
              );
            });
          });

          this.modelOptions = {
            updateOn: 'default blur',
            debounce: {
              'default': 200,
              'blur': 0
            }
          };
        }
      }, formDDO);
    };
  });