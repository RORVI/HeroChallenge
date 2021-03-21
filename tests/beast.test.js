/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Beast functionality tests
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';
const assert = require('assert').strict;
const Beast = require('../beast');
const BaseTest = require('./base.test');

module.exports = class BeastTest extends BaseTest {
    constructor() {
        super();
        super.addTest(() => this.beastShouldBeCreatedSuccessfullyWithParameters());
        super.addTest(() => this.beastShouldThrowErrorForEmptyName());
        super.addTest(() => this.beastShouldThrowErrorForNullName());
        super.addTest(() => this.beastShouldThrowErrorForUndefinedName());
        super.addTest(() => this.beastShouldThrowErrorForBadHealthParameterValue());
    }

    beastShouldBeCreatedSuccessfullyWithParameters() {
        // arrange
        const name = 'Wolverine';
        const health = 70;
        const strength = 65;
        const defence = 45;
        const speed = 52;
        const luck = 31;

        // act
        const beast = new Beast(name, health, strength, defence, speed, luck);

        // assert
        assert.strictEqual(beast.name, name);
        assert.strictEqual(beast.health, health);
        assert.strictEqual(beast.strength, strength);
        assert.strictEqual(beast.defence, defence);
        assert.strictEqual(beast.speed, speed);
        assert.strictEqual(beast.luck, luck);

        console.log("beastShouldBeCreatedSuccessfullyWithParameters - Passed");
    }

    beastShouldThrowErrorForEmptyName() {
        // arrange
        const name = '';
        const health = 70;
        const strength = 65;
        const defence = 45;
        const speed = 52;
        const luck = 31;

        // act
        try {
            const hero = new Beast(name, health, strength, defence, speed, luck);
        } catch (error) {
            // assert
            if (error.message === 'Invalid character name!') {
                return console.log('beastShouldThrowErrorForEmptyName() - Passed');
            }

            throw error;
        }
    }

    beastShouldThrowErrorForNullName() {
        // arrange
        const name = null;
        const health = 71;
        const strength = 75;
        const defence = 45;
        const speed = 44;
        const luck = 12;

        // act
        try {
            const hero = new Beast(name, health, strength, defence, speed, luck);
        } catch (error) {
            // assert
            if (error.message === 'Invalid character name!') {
                return console.log('beastShouldThrowErrorForNullName() - Passed');
            }

            throw error;
        }
    }

    beastShouldThrowErrorForUndefinedName() {
        // arrange
        const name = undefined;
        const health = 71;
        const strength = 75;
        const defence = 45;
        const speed = 44;
        const luck = 12;

        // act
        try {
            const hero = new Beast(name, health, strength, defence, speed, luck);
        } catch (error) {
            // assert
            if (error.message === 'Invalid character name!') {
                return console.log('beastShouldThrowErrorForUndefinedName() - Passed');
            }

            throw error;
        }
    }

    beastShouldThrowErrorForBadHealthParameterValue() {
        // arrange
        const name = "Wolverine";
        const health = 101;
        const strength = 75;
        const defence = 45;
        const speed = 44;
        const luck = 12;

        // act
        try {
            const hero = new Beast(name, health, strength, defence, speed, luck);
        } catch (error) {
            // assert
            if (error.message === 'Invalid health value!') {
                return console.log('beastShouldThrowErrorForBadHealthParameterValue() - Passed');
            }

            throw error;
        }
    }
}

// let testerBeast = new module.exports();
// testerBeast.runTests();