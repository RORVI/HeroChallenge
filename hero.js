/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Hero class implementation
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';

const Character = require('./character');
const Utils = require('./utils');
const utils = new Utils();

function generateRandomStats() {
    return {
        health: utils.generateRandomValue(70, 90),
        strength: utils.generateRandomValue(70, 90),
        defence: utils.generateRandomValue(45, 55),
        speed: utils.generateRandomValue(40, 50),
        luck: utils.generateRandomValue(10, 30)
    };
}

module.exports = class Hero extends Character {
    constructor(name, health, strength, defence, speed, luck) {
        const randomStats = generateRandomStats();

        health = health != null ? health : randomStats.health;
        strength = strength != null ? strength : randomStats.strength;
        defence = defence != null ? defence : randomStats.defence;
        speed = speed != null ? speed : randomStats.speed;
        luck = luck != null ? luck : randomStats.luck;

        super(name, health, strength, defence, speed, luck);

        this.ChanceToUseMagicShield = 10;
        this.ChanceToStrikeTwice = 20;
    }

    prepareNextTurn() {
        const randomStats = generateRandomStats();
        this.strength = randomStats.strength;
        this.defence = randomStats.defence;
        this.speed = randomStats.speed;
        this.luck = randomStats.luck;
    }

    amILuckyToUseMagicShield() {
        let luckyChance = utils.generateRandomValue(0, 100);
        return luckyChance <= this.ChanceToUseMagicShield;
    }

    amILuckyToStrikeTwice() {
        let luckyChance = utils.generateRandomValue(0, 100);
        return luckyChance <= this.ChanceToStrikeTwice;
    }

    takeHit(damage) {
        const defendWithMagicShield = this.amILuckyToUseMagicShield();
        if (defendWithMagicShield) {
            damage /= 2;
        }

        super.takeHit(damage);
    }

    attack(defender) {
        let luckyToStrikeTwice = this.amILuckyToStrikeTwice();
        super.attack(defender);

        if (defender.health <= 0) {
            return;
        }

        if (luckyToStrikeTwice) {
            super.attack(defender);
        }
    }
}