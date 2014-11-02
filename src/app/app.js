'use strict';

angular.module('beeroclock', [
    'ngSanitize',
    'LocalStorageModule',
    'beeroclock.routes',
    'beeroclock.controller',
    'beeroclock.service',
    'beeroclock.directive'
])

.constant('appConfig', {
    'name': 'Beer O\'Clock',
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

.run(function () {});
