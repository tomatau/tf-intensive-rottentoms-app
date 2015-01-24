'use strict';

describe('Home Controller', function(){
  var scope;

  beforeEach(module('routes'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define home', inject(function($controller) {
    expect(scope.home).toBeUndefined();

    $controller('HomeCtrl', {
      $scope: scope
    });

    expect(scope.home).toBeDefined();
  }));
});
