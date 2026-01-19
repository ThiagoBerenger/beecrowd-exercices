var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines)

let total = 1

for (i = 1; i <= number; i++) {
    total = total * i
}

console.log(total)