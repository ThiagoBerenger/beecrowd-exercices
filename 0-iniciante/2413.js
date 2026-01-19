var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const value = parseInt(lines[0])

const calculate = () => console.log((value * 2) * 2)
calculate(calculate)