/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Tests runner used for running all of the unit tests
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';

const BaseTest = require('./base.test');
const HeroTest = require('./hero.test');
const BeastTest = require('./beast.test');
const AttackTest = require('./attack.test');

class TestsRunner extends BaseTest {
    constructor(...args) {
        super();

        args.forEach(arg => {
            super.addTest(arg);
        });
    }

    runTests() {
        for (let i = 0; i < this._tests.length; i++) {
            this._tests[i].runTests();
        }
    }
}

const tests = new TestsRunner(new HeroTest(), new BeastTest(), new AttackTest());
tests.runTests();