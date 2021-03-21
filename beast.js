/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Beast class
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';

const Character = require('./character');
const Utils = require('./utils');
const utils = new Utils();

module.exports = class Beast extends Character {
    constructor(name, health, strength, defence, speed, luck) {
        health = health != null ? health : utils.generateRandomValue(60, 90);
        strength = strength != null ? strength : utils.generateRandomValue(60, 90);
        defence = defence != null ? defence : utils.generateRandomValue(40, 60);
        speed = speed != null ? speed : utils.generateRandomValue(40, 60);
        luck = luck != null ? luck : utils.generateRandomValue(25, 40);

        super(name, health, strength, defence, speed, luck);
    }
}