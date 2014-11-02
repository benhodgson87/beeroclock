'use strict';

angular.module('beeroclock.services')

/**
 * @ngdoc service
 * @name beeroclock.services.Dictionary
 * @description Get words in correct language
 */

.factory('Dictionary', function ($rootScope, dictionary, appConfig) {

    var _store;

    var _service = {

        update: function (lang) {
            lang = lang || appConfig.lang;

            _store = this.get(lang);
            $rootScope.dictionary = _store;
            $rootScope.$broadcast('languageChanged', lang);
        },

        get: function (lang) {
            lang = lang || appConfig.lang;

            return dictionary[lang].strings;
        },

        term: function (key) {
            if (typeof key === 'undefined') {
                throw new Error('No dictionary keyword lookup provided');
            }

            return _store[key];
        },

        languages: function () {

            var languages = [];

            for (var key in dictionary) {
                if (dictionary.hasOwnProperty(key)) {
                    languages[key] = dictionary[key].name;
                }
            }

            return languages;
        }
    };

    return _service;
});
