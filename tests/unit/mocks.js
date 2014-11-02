'use strict';

(function (window) {

    beforeEach(module(
        'beeroclock.tpl',
        function($provide) {

            $provide.constant('appConfig', {
                'name': 'Beer O\'Clock',
                'timer': {
                    'hours': 5,
                    'mins': 0
                },
                'drink': 'pint-lager'
            });

    }));

}(window));
