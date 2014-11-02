'use strict';

angular.module('beeroclock.directives')

/**
 * @ngdoc directive
 * @name beeroclock.directives.timer
 * @description Return time until Beer O'Clock
 */

.directive('timer', function ($log, $rootScope, $interval, Time, Settings) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            type: '@'
        },
        templateUrl: 'app/time/views/_timer.tpl.html',
        link: function (scope) {
            var timer,
                defaultTime = Settings.getBeerOclock();

            scope.timer = {
                hours: '00',
                minutes: '00',
                seconds: '00',
                full: '00:00:00'
            };

            // scope.setTime = Settings.setBeerOclock(17, 30);

            scope.beeroclock = defaultTime;

            $interval(function () {
                timer = Time.now();
                scope.timer = timer;
                $rootScope.$broadcast('timerUpdate', timer);
            }, 1000);

        }
    };
});
