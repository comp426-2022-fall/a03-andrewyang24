#!/usr/bin/env node

import { roll } from "/lib/roll.js";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2))

console.log(JSON.stringify(roll(argv.sides, argv.dice, argv.rolls)))
