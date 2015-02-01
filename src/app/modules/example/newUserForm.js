'use strict';
angular.module('example')
    .directive('newUserForm', function(
        formBuilder,
        EXAMPLEURL,
        uniqueNameAndEmailValidator
    ){
        return formBuilder({
            templateUrl: FORMSURL + 'new-user-form.tmpl.html',
            formName: 'newUserForm',
            validators: {
                'notUnique': uniqueNameAndEmailValidator
            }
        });
    });