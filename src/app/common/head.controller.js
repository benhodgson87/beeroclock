'use strict';

angular.module('beeroclock.controllers')

/**
 * A controller for the page head
 */

.controller('HeadController', function($rootScope){
    var vm = this,
        time,
        titleSep = ' | ',
        titleText = document.title;

    vm.pageTitle = titleText;

    $rootScope.$on('timerUpdate', function (ev, args) {
        time = args.full;
        vm.pageTitle = time + titleSep + titleText || titleText;
    });
});
