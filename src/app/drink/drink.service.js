'use strict';

angular.module('beeroclock.service')

/**
 * @ngdoc service
 * @name beeroclock.services.Drinks
 * @description A service to return different drinks types
 */

.factory('Drinks', function () {

    var glass = {
        'pint': {
            'name': 'UK Pint',
            'class': 'glass--pint'
        },
        'bottle-beer': {
            'name': 'Beer Bottle',
            'class': 'glass--bottle-beer'
        },
        'bottle-alco': {
            'name': 'Alcopop Bottle',
            'class': 'glass--bottle-alcopop'
        },
        'hiball': {
            'name': 'HiBall',
            'class': 'glass--hiball'
        }
    };

    var liquid = {
        'lager': {
            'name': 'Lager',
            'type': 'drink--lager',
            'bubbles': {
                'min': 20,
                'max': 40,
                'small': 2,
                'big': 6
            }
        },
        'ale': {
            'name': 'Ale',
            'class': 'drink--ale'
        },
        'stout': {
            'name': 'Stout',
            'type': 'drink--stout',
        },
        'gintonic': {
            'name': 'Gin & Tonic',
            'type': 'drink--gintonic'
        }
    };

    var drinks = {
        'pint-lager': {
            'name': 'Pint of Lager',
            'liquid': liquid.lager,
            'glass': glass.pint
        },
        'pint-ale': {
            'name': 'Pint of Ale',
            'liquid': liquid.ale,
            'glass': glass.pint
        },
        'pint-stout': {
            'name': 'Pint of Stout',
            'liquid': liquid.stout,
            'glass': glass.pint
        },
        'gin-tonic': {
            'name': 'Gin & Tonic',
            'liquid': liquid.gintonic,
            'glass': glass.hiball
        }
    };

    var _service = {

        get: function (type) {
            if (typeof type === 'undefined') {
                throw new Error('Tried to get drink, but no drink type supplied');
            }

            if (!drinks.hasOwnProperty(type) ) {
                throw new Error('Drink does not exist');
            }

            return drinks[type];
        },

        default: function () {
            for (var drink in drinks) {
                if (drinks.propertyIsEnumerable(drink)) {
                    return drink;
                }
            }
        }

    };

    return _service;
});
