'use strict';

angular.module('beeroclock.directive')

/**
 * @ngdoc directive
 * @name beeroclock.directives.drink
 * @description Pour me a drink...
 */

.directive('drink', function (localStorageService, Drinks) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            type: '@'
        },
        templateUrl: 'app/drink/views/_drink.tpl.html',
        link: function (scope) {

            // Get saved drink, or use default
            var drink = localStorageService.get('userDrink') || Drinks.default();

            scope.drink = Drinks.get(drink);
        }
    };
});
