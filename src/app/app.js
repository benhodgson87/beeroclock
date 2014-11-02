'use strict';

angular.module('beeroclock', [
    'ngSanitize',
    'LocalStorageModule',
    'beeroclock.routes',
    'beeroclock.controllers',
    'beeroclock.services',
    'beeroclock.directives'
])

.constant('appConfig', {
    'name': 'Beer O\'clock',
    'lang': 'en',
    'timer': {
        'hours': 5,
        'mins': 0
    },
    'drink': 'pint-lager'
})

.config(function ($locationProvider, localStorageServiceProvider) {

    // LocalStorage Config
    localStorageServiceProvider.setPrefix('beeroclock');

})

.run(function ($rootScope, Dictionary) {

    // Populate Dictionary
    Dictionary.update();

});
