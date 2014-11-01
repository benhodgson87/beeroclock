'use strict';

angular.module('beeroclock.routes', [
    'ngRoute'
])
.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            controller: 'MainController',
            controllerAs: 'vm',
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
