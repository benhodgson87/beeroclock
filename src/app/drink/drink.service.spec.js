'use strict';

describe('Drinks Service', function () {

    /**
     * Setup Dependencies
     */

    var Drink;

    beforeEach(module('beeroclock.services'));

    beforeEach(inject(function (_Drink_) {
        Drink = _Drink_;
    }));


    /**
     * Tests
     */

    describe('should get a drink', function () {

        it('and return a pint of lager', function () {
            var get = Drink.get('pint-lager');

            expect(get.name).toBe('Pint of Lager');
        });

        it('and error if no drink specified', function () {
            expect(function () {
                Drink.get();
            }).toThrow();
        });

        it('and error if specified drink does not exist', function () {
            expect(function () {
                Drink.get('not-a-real-drink');
            }).toThrow();
        });

    });

    describe('should find the default (first) drink', function () {

        it('and return the key', function () {
            var get = Drink.default();

            expect(get).toBe('pint-lager');
        });

    });

});
