var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const [C, N] = lines[0].split(' ')
const result = C % N

console.log(result)