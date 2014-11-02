'use strict';

angular.module('beeroclock.services')

/**
 * @ngdoc service
 * @name beeroclock.services.Settings
 * @description Handle user custom settings
 */

.factory('Settings', function (appConfig, localStorageService) {

    var _service = {

        getBeerOclock: function () {
            return localStorageService.get('userTime') || appConfig.timer;
        },

        setBeerOclock: function (h, m) {
            if (typeof h === 'undefined' || typeof m === 'undefined') {
                throw new Error('Cannot set new time. Insufficient parameters provided.');
            }

            var time = {
                'hours': h,
                'mins': m
            };

            localStorageService.set('userTime', time);

            // Check the value has been updated
            if (localStorageService.get('userTime') === time) {
                return true;
            } else {
                throw new Error('Error storing new custom time');
            }
        }

    };

    return _service;
});
