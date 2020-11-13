const wrapWithBoo = require('index.js')

export function wrapWithBoo(args) {
  const args = process.argv.slice(2);
  console.log(wrapWithBoo(args.join(' ')));
}
