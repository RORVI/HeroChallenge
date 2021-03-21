/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Attack functionality tests
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';
const assert = require('assert').strict;
const Hero = require('../hero');
const Beast = require('../beast');
const BaseTest = require('./base.test');

module.exports = class HeroTest extends BaseTest {
    constructor() {
        super();
        super.addTest(() => this.heroAttackShouldDecreaseHealthByGivenValue());
        super.addTest(() => this.beastAttackShouldDecreaseHealthByGivenValue());
        super.addTest(() => this.heroAttackShouldDecreaseHealthByDoubleGivenValueWhenLucky());
        super.addTest(() => this.heroAttackShouldNotDecreaseHealthByGivenValueWhenBeastIsLucky());
    }

    heroAttackShouldDecreaseHealthByGivenValue() {
        // arrange
        const heroName = 'Orderus';
        const heroHealth = 71;
        const heroStrength = 75;
        const heroDefence = 45;
        const heroSpeed = 44;
        const heroLuck = 12;
        const hero = new Hero(heroName, heroHealth, heroStrength, heroDefence, heroSpeed, heroLuck);

        const beastName = 'Wolverine';
        const beastHealth = 70;
        const beastStrength = 65;
        const beastDefence = 45;
        const beastSpeed = 52;
        const beastLuck = 31;
        const beast = new Beast(beastName, beastHealth, beastStrength, beastDefence, beastSpeed, beastLuck);

        beast.amILucky = () => false;
        hero.amILuckyToStrikeTwice = () => false;
        hero.amILuckyToUseMagicShield = () => false;
        hero.amILucky = () => false;
        hero.prepareNextTurn = () => {};

        const damage = hero.strength - beast.defence;
        const expectedHealth = beast.health - damage < 0 ? beast.health = 0 : beast.health - damage;

        hero.attack(beast);

        assert.strictEqual(beast.health, expectedHealth);

        console.log('heroAttackShouldDecreaseHealthByGivenValue() - Passed');
    }

    beastAttackShouldDecreaseHealthByGivenValue() {
        // arrange
        const heroName = 'Orderus';
        const heroHealth = 71;
        const heroStrength = 75;
        const heroDefence = 45;
        const heroSpeed = 44;
        const heroLuck = 12;
        const hero = new Hero(heroName, heroHealth, heroStrength, heroDefence, heroSpeed, heroLuck);

        const beastName = 'Wolverine';
        const beastHealth = 70;
        const beastStrength = 65;
        const beastDefence = 45;
        const beastSpeed = 52;
        const beastLuck = 31;
        const beast = new Beast(beastName, beastHealth, beastStrength, beastDefence, beastSpeed, beastLuck);

        beast.amILucky = () => false;
        hero.amILuckyToStrikeTwice = () => false;
        hero.amILucky = () => false;
        hero.amILuckyToUseMagicShield = () => false;
        hero.prepareNextTurn = () => {};

        const damage = beast.strength - hero.defence;
        const expectedHealth = hero.health - damage < 0 ? hero.health = 0 : hero.health - damage;

        beast.attack(hero);

        assert.strictEqual(hero.health, expectedHealth);

        console.log('beastAttackShouldDecreaseHealthByGivenValue() - Passed');
    }

    heroAttackShouldDecreaseHealthByDoubleGivenValueWhenLucky() {
        // arrange
        const heroName = 'Orderus';
        const heroHealth = 71;
        const heroStrength = 75;
        const heroDefence = 45;
        const heroSpeed = 44;
        const heroLuck = 12;
        const hero = new Hero(heroName, heroHealth, heroStrength, heroDefence, heroSpeed, heroLuck);

        const beastName = 'Wolverine';
        const beastHealth = 70;
        const beastStrength = 65;
        const beastDefence = 45;
        const beastSpeed = 52;
        const beastLuck = 31;
        const beast = new Beast(beastName, beastHealth, beastStrength, beastDefence, beastSpeed, beastLuck);

        beast.amILucky = () => false;
        hero.amILuckyToStrikeTwice = () => true;
        hero.amILuckyToUseMagicShield = () => false;
        hero.amILucky = () => false;
        hero.prepareNextTurn = () => {};

        const damage = (hero.strength - beast.defence) * 2;
        const expectedHealth = beast.health - damage < 0 ? beast.health = 0 : beast.health - damage;

        hero.attack(beast);

        assert.strictEqual(beast.health, expectedHealth);

        console.log('heroAttackShouldDecreaseHealthByDoubleGivenValueWhenLucky() - Passed');
    }

    heroAttackShouldNotDecreaseHealthByGivenValueWhenBeastIsLucky() {
        // arrange
        const heroName = 'Orderus';
        const heroHealth = 71;
        const heroStrength = 75;
        const heroDefence = 45;
        const heroSpeed = 44;
        const heroLuck = 12;
        const hero = new Hero(heroName, heroHealth, heroStrength, heroDefence, heroSpeed, heroLuck);

        const beastName = 'Wolverine';
        const beastHealth = 70;
        const beastStrength = 65;
        const beastDefence = 45;
        const beastSpeed = 52;
        const beastLuck = 31;
        const beast = new Beast(beastName, beastHealth, beastStrength, beastDefence, beastSpeed, beastLuck);

        beast.amILucky = () => true;
        hero.amILuckyToStrikeTwice = () => false;
        hero.amILuckyToUseMagicShield = () => false;
        hero.amILucky = () => false;
        hero.prepareNextTurn = () => {};

        const damage = 0;
        const expectedHealth = beast.health - damage < 0 ? beast.health = 0 : beast.health - damage;

        hero.attack(beast);

        assert.strictEqual(beast.health, expectedHealth);

        console.log('heroAttackShouldNotDecreaseHealthByGivenValueWhenBeastIsLucky() - Passed');
    }
}

// let testerHero = new module.exports();
// testerHero.runTests();