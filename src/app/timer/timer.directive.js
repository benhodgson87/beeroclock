'use strict';

angular.module('beeroclock.directive')

/**
 * @ngdoc directive
 * @name beeroclock.directives.timer
 * @description Return time until Beer O'Clock
 */

.directive('timer', function ($log, $rootScope, $interval, appConfig, localStorageService) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            type: '@'
        },
        templateUrl: 'app/timer/views/_timer.tpl.html',
        link: function (scope) {
            function formatTime (val) {
                if (val < 10) val += '0';
                return val;
            }

            var time,
                defaultTime = localStorageService.get('userTime') || appConfig.timer;

            scope.timer = defaultTime;

            $interval(function () {
                var date = new Date();

                time = {
                    hours: formatTime(date.getHours()),
                    minutes: formatTime(date.getMinutes()),
                    seconds: formatTime(date.getSeconds())
                };

                time.full = [
                    time.hours,
                    time.minutes,
                    time.seconds
                ].join(':');

                scope.hours = time.hours;
                scope.mins  = time.minutes;
                scope.secs  = time.seconds;
                scope.timer  = time.full;

                $rootScope.$broadcast('timerUpdate', {
                    hours: time.hours,
                    mins: time.minutes,
                    secs: time.seconds,
                    time : time.full
                });
            }, 1000);

        }
    };
});
