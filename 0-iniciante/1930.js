var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ').map(n => parseInt(n))
const soma = values.reduce((acc, val) => acc + val, 0)

console.log(soma - 3)


