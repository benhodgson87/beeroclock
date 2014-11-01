'use strict';

angular.module('beeroclock.routes', [
    'ngRoute'
])
.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'app/common/views/main.tpl.html'
        })

        .when('/settings', {
            controller: 'SettingsController',
            controllerAs: 'vm',
            templateUrl: 'app/settings/views/settings.tpl.html'
        })

        .otherwise({
            redirectTo: '/'
        });
});
