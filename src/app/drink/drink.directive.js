'use strict';

angular.module('beeroclock.directive')

/**
 * @ngdoc directive
 * @name beeroclock.directives.drink
 * @description Pour me a drink...
 */

.directive('drink', function (localStorageService, Drink) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            type: '@'
        },
        templateUrl: 'app/drink/views/_drink.tpl.html',
        link: function (scope) {

            // Get saved drink, or use default
            var drink = localStorageService.get('userDrink') || Drink.default();

            scope.drink = Drink.get(drink);
        }
    };
});
