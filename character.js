/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Character functionality
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';

const Utils = require('./utils');
const utils = new Utils();

module.exports = class Character {
    constructor(name, health, strength, defence, speed, luck) {
        this._name;
        this._health;
        this._strength;
        this._defence;
        this._speed;
        this._luck;

        this.name = name;
        this.health = health;
        this.strength = strength;
        this.defence = defence;
        this.speed = speed;
        this.luck = luck;
    }

    set name(value) {
        if (value === '' || value === undefined || value === null) {
            throw new Error('Invalid character name!');
        }

        this._name = value;
    }

    get name() {
        return this._name;
    }

    set health(value) {
        if (value === null || value === undefined || value < 0 || value > 100) {
            throw new Error('Invalid health value!');
        }

        this._health = value;
    }

    get health() {
        return this._health;
    }

    set strength(value) {
        if (value === null || value === undefined || value < 0 || value > 100) {
            throw new Error('Invalid strength value!');
        }

        this._strength = value;
    }

    get strength() {
        return this._strength;
    }

    set defence(value) {
        if (value === null || value === undefined || value > 100) {
            throw new Error('Invalid defence value!');
        }

        this._defence = value;
    }

    get defence() {
        return this._defence;
    }

    set speed(value) {
        if (value === null || value === undefined || value < 0 || value > 100) {
            throw new Error('Invalid speed value!');
        }

        this._speed = value;
    }

    get speed() {
        return this._speed;
    }

    set luck(value) {
        if (value === null || value === undefined || value < 0 || value > 100) {
            throw new Error('Invalid luck value!');
        }

        this._luck = value;
    }

    get luck() {
        return this._luck;
    }

    _calculateDamage(character) {
        const damage = this.strength - character.defence;
        return damage;
    }

    attack(defender) {
        if (!defender.amILucky()) {
            const damage = this._calculateDamage(defender);
            defender.takeHit(damage);
        }

        this.prepareNextTurn();
        defender.prepareNextTurn();
    }

    amILucky() {
        const luckyChance = utils.generateRandomValue(0, 100);
        return luckyChance >= this.luck;
    }

    takeHit(damage) {
        this.health = this.health - damage < 0 ? this.health = 0 : this.health - damage;
        return this.health;
    }

    prepareNextTurn() {

    }
}