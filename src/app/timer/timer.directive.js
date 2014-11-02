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
                if (val < 10) {
                    val = '0' + val;
                }

                return val;
            }

            var time, hours, minutes, seconds, fmtTime,
                defaultTime = localStorageService.get('userTime') || appConfig.timer;

            scope.time = defaultTime;

            $interval(function () {
                time = new Date();
                hours = formatTime(time.getHours());
                minutes = formatTime(time.getMinutes());
                seconds = formatTime(time.getSeconds());
                fmtTime = [
                    hours,
                    minutes,
                    seconds
                ].join(':');

                scope.hours = hours;
                scope.mins  = minutes;
                scope.secs  = seconds;
                scope.time  = fmtTime;

                $rootScope.$broadcast('timerUpdate', {
                    hours: hours,
                    mins: minutes,
                    secs: seconds,
                    time : fmtTime
                });
            }, 1000);

        }
    };
});
