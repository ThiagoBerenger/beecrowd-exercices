var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const value = parseInt(lines[0]) - 2

console.log(value)

