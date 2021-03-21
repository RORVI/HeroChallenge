/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Forest context representation
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';

const Character = require('./character');
const Logger = require('./logger');
const logger = new Logger();

module.exports = class forest {
    constructor(character1, character2) {
        if (character1 == null || !(character1 instanceof Character)) {
            throw new Error('Invalid character1');
        }

        if (character2 == null || !(character2 instanceof Character)) {
            throw new Error('Invalid character2');
        }

        this.character1 = character1;
        this.character2 = character2;
    }

    fight() {
        logger.log(`<--------------------------------------------------------------------------------->`);
        logger.log(`                             Welcome to monster battle                             `);

        const maxRounds = 20;
        let attacker;
        let defender;

        if (this.character1.speed > this.character2.speed || (this.character1.speed === this.character2.speed && this.character1.luck > this.character2.luck)) {
            attacker = this.character1;
            defender = this.character2;
        } else {
            attacker = this.character2;
            defender = this.character1;
        }

        for (let i = 0; i < maxRounds; i++) {
            this.showPlayerStats(attacker, defender, i + 1);
            attacker.attack(defender);
            if (defender.health <= 0) {
                break;
            }

            let swapCharacter = attacker;
            attacker = defender;
            defender = swapCharacter;
        }
        this.showResults(attacker, defender);

        if (attacker.health > defender.health) {
            logger.log(`\n                     * * * ${attacker.name} won! * * *                       `);
            logger.log(`<--------------------------------------------------------------------------------->`);
            return false;
        }

        logger.log('                             * * * It\'s a tie * * *                               ');
        logger.log(`<--------------------------------------------------------------------------------->`);
    }

    showPlayerStats(attacker, defender, round) {
        logger.log(`<--------------------------------------------------------------------------------->`);
        logger.log(`                               Round ${round}                                      `);
        logger.log(`<--------------------------------------------------------------------------------->`);
        logger.log(`attacker name:     ${attacker.name}\tdefender name:     ${defender.name}`);
        logger.log(`attacker health:   ${attacker.health}\t\tdefender health:   ${defender.health}`);
        logger.log(`attacker strength: ${attacker.strength}\t\tdefender strength: ${defender.strength}`);
        logger.log(`attacker defence:  ${attacker.defence}\t\tdefender defence:  ${defender.defence}`);
        logger.log(`attacker speed:    ${attacker.speed}\t\tdefender speed:    ${defender.speed}`);
        logger.log(`attacker luck:     ${attacker.luck}\t\tdefender luck:     ${defender.luck}`);
    }

    showResults(attacker, defender) {
        logger.log(`<--------------------------------------------------------------------------------->`);
        logger.log(`                                     Results                                       `);
        logger.log(`<--------------------------------------------------------------------------------->`);
        logger.log(`attacker name:     ${attacker.name}\tdefender name:     ${defender.name}`);
        logger.log(`attacker health:   ${attacker.health}\t\tdefender health:   ${defender.health}`);
        logger.log(`attacker strength: ${attacker.strength}\t\tdefender strength: ${defender.strength}`);
        logger.log(`attacker defence:  ${attacker.defence}\t\tdefender defence:  ${defender.defence}`);
        logger.log(`attacker speed:    ${attacker.speed}\t\tdefender speed:    ${defender.speed}`);
        logger.log(`attacker luck:     ${attacker.luck}\t\tdefender luck:     ${defender.luck}`);
    }
}