'use strict';

angular.module('beeroclock.services')

/**
 * @ngdoc service
 * @name beeroclock.services.Time
 * @description A service for handling Time related functionality
 */

.factory('Time', function () {

    var _service = {

        formatTime: function (val) {
            if (val < 10) val = '0' + val;
            return val;
        },

        now: function () {
            var date = new Date(),
                time = {
                    hours: this.formatTime(date.getHours()),
                    minutes: this.formatTime(date.getMinutes()),
                    seconds: this.formatTime(date.getSeconds())
                };

            time.full = [
                time.hours,
                time.minutes,
                time.seconds
            ].join(':');

            return time;
        },

        until: function (h, m) {

            console.log(h, m);

        }

    };

    return _service;
});
