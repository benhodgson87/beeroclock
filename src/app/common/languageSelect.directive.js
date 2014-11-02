'use strict';

angular.module('beeroclock.directives')

/**
 * @ngdoc directive
 * @name beeroclock.directives.languageSelect
 * @description Language change selector
 */

.directive('languageSelect', function (appConfig, Dictionary) {
    return {
        restrict: 'EA',
        replace: true,
        template: '<select ' +
                      'ng-model="language"' +
                      'ng-options="key as value for (key, value) in languages"' +
                      'ng-change="changeLanguage(key)">' +
                  '</select>',
        link: function (scope) {

            var languages = Dictionary.languages();
            scope.languages = languages;
            scope.language = appConfig.lang;

            scope.changeLanguage = function () {
                var lang = scope.language;
                Dictionary.update(lang);
            };
        }
    };
});
