'use strict';

angular.module('beeroclock.controller')

/**
 * The main view controller
 */

.controller('MainController', function(localStorageService, Drinks){
    var vm = this;

    // Get user saved drink, or fall back to default
    vm.drink = localStorageService.get('drink') || Drinks.default();

});
