/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Base test class
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

module.exports = class BaseTest {
    _tests = [];

    runTests() {
        for (let test of this._tests) {
            try {
                test();
            } catch (error) {
                console.log(error);
            }
        }
    }

    addTest(action) {
        this._tests.push(action);
    }
}