/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Hero functionality tests
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';
const assert = require('assert').strict;
const Hero = require('../hero');
const BaseTest = require('./base.test');

module.exports = class HeroTest extends BaseTest {
    constructor() {
        super();
        super.addTest(() => this.heroShouldBeCreatedSuccessfullyWithParameters());
        super.addTest(() => this.heroShouldThrowErrorForEmptyName());
        super.addTest(() => this.heroShouldThrowErrorForNullName());
        super.addTest(() => this.heroShouldThrowErrorForUndefinedName());
        super.addTest(() => this.heroShouldThrowErrorForBadHealthParameterValue());
    }

    heroShouldBeCreatedSuccessfullyWithParameters() {
        // arrange
        const name = 'Orderus';
        const health = 71;
        const strength = 75;
        const defence = 45;
        const speed = 44;
        const luck = 12;

        // act
        const hero = new Hero(name, health, strength, defence, speed, luck);

        // assert
        assert.strictEqual(hero.name, name);
        assert.strictEqual(hero.health, health);
        assert.strictEqual(hero.strength, strength);
        assert.strictEqual(hero.defence, defence);
        assert.strictEqual(hero.speed, speed);
        assert.strictEqual(hero.luck, luck);

        console.log('heroShouldBeCreatedSuccessfullyWithParameters - Passed');
    }

    heroShouldThrowErrorForEmptyName() {
        // arrange
        const name = '';
        const health = 71;
        const strength = 75;
        const defence = 45;
        const speed = 44;
        const luck = 12;

        // act
        try {
            const hero = new Hero(name, health, strength, defence, speed, luck);
        } catch (error) {
            // assert
            if (error.message === 'Invalid character name!') {
                return console.log('heroShouldThrowErrorForEmptyName() - Passed');
            }

            throw error;
        }
    }

    heroShouldThrowErrorForNullName() {
        // arrange
        const name = null;
        const health = 71;
        const strength = 75;
        const defence = 45;
        const speed = 44;
        const luck = 12;

        // act
        try {
            const hero = new Hero(name, health, strength, defence, speed, luck);
        } catch (error) {
            // assert
            if (error.message === 'Invalid character name!') {
                return console.log('heroShouldThrowErrorForNullName() - Passed');
            }

            throw error;
        }
    }

    heroShouldThrowErrorForUndefinedName() {
        // arrange
        const name = undefined;
        const health = 71;
        const strength = 75;
        const defence = 45;
        const speed = 44;
        const luck = 12;

        // act
        try {
            const hero = new Hero(name, health, strength, defence, speed, luck);
        } catch (error) {
            // assert
            if (error.message === 'Invalid character name!') {
                return console.log('heroShouldThrowErrorForUndefinedName() - Passed');
            }

            throw error;
        }
    }

    heroShouldThrowErrorForBadHealthParameterValue() {
        // arrange
        const name = "Orderon";
        const health = 101;
        const strength = 75;
        const defence = 45;
        const speed = 44;
        const luck = 12;

        // act
        try {
            const hero = new Hero(name, health, strength, defence, speed, luck);
        } catch (error) {
            // assert
            if (error.message === 'Invalid health value!') {
                return console.log('heroShouldThrowErrorForBadHealthParameterValue() - Passed');
            }

            throw error;
        }
    }
}

// let testerHero = new module.exports();
// testerHero.runTests();