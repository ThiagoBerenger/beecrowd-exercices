var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const a = parseFloat(lines.shift())
const b = parseFloat(lines.shift())

let media = (a * 3.5 + b * 7.5) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)