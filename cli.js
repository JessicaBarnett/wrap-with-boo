const wrapWithBoo = require('index.js')
const args = process.argv.slice(2);
const str = args[0];

console.log(wrapWithBoo(str))