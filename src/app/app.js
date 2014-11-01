'use strict';

angular.module('beeroclock', [
    'ngSanitize',
    'LocalStorageModule',
    'beeroclock.routes',
    'beeroclock.controller',
    'beeroclock.service',
    'beeroclock.directive'
])

.config(function ($locationProvider, localStorageServiceProvider) {

    // LocalStorage Config
    localStorageServiceProvider.setPrefix('beeroclock');

})

.run(function () {});
