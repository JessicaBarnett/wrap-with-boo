#!/usr/bin/env node

const wrapWithBoo = require('../src/index.js')
const str = process.argv.slice(2)[0];
console.log(wrapWithBoo(str));
