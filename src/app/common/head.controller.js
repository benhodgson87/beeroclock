'use strict';

angular.module('beeroclock.controller')

/**
 * A controller for the page head
 */

.controller('HeadController', function($rootScope, appConfig){
    var vm = this,
        titleSep = ' | ',
        titleText = appConfig.name || document.title,
        defaultTitle = titleText;

    vm.pageTitle = defaultTitle;

    $rootScope.$on('timerUpdate', function (ev, args) {
        vm.pageTitle = args.time + titleSep + titleText || defaultTitle;
    });
});
