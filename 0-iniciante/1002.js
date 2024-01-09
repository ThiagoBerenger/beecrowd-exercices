var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const number = (parseFloat(lines))
const n = 3.14159

const raio = (number * number) * n 

console.log(`A=${raio.toFixed(4)}`)







