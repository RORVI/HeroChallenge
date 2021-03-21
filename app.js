/**
 * Copyright (c) 01/03/2021
 *
 * Solution for the emag hero challenge
 *
 * @summary Primary point of entry for the app
 * @author Roman Ovidiu <ovidiurobert.roman@gmail.com>
 *
 * Created at     : 01/03/2021
 */

'use strict';

const Hero = require('./hero');
const Beast = require('./beast');
const Forest = require('./forest');

const orderus = new Hero('Orderus');
const wolverine = new Beast('Wolverine');
const arena = new Forest(orderus, wolverine);

arena.fight();