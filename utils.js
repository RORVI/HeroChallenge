/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Application utilities
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

module.exports = class Utils {
    generateRandomValue(min, max) {
        return Math.floor((Math.random() * (max - min) + min));
    }
}