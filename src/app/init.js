'use strict';

angular.element(document).ready(function () {

    var appName = 'beeroclock';

    var initInjector = angular.injector(['ng']),
        $http = initInjector.get('$http'),
        $log = initInjector.get('$log') || window.console;

    function run (lang) {
        lang = lang || {};

        angular.module('beeroclock').constant('dictionary', lang);
        angular.bootstrap(document, [appName]);
    }

    $http.get('lang/lang.json')
        .then(function (resp) {
            run(resp.data);
        }, function (error) {
            $log.error('Failed to load language object. Falling back to defaults.', error);
            run();
        });

});
