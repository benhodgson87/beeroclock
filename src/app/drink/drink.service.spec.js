'use strict';

describe('Drinks Service', function () {

    /**
     * Setup Dependencies
     */

    var Drinks;

    beforeEach(module('beeroclock.service'));

    beforeEach(inject(function (_Drinks_) {
        Drinks = _Drinks_;
    }));


    /**
     * Tests
     */

    describe('should get a drink', function () {

        it('and return a pint of lager', function () {
            var get = Drinks.get('pint-lager');

            expect(get.name).toBe('Pint of Lager');
        });

        it('and error if no drink specified', function () {
            expect(Drinks.get).toThrow();
        });

        it('and error if drink does not exist', function () {
            expect(function () {
                Drinks.get('not-a-real-drink');
            }).toThrow();
        });

    });

    describe('should get the default (first) drink', function () {

        it('and return the key', function () {
            var get = Drinks.default();

            expect(get).toBe('pint-lager');
        });

    });

});
