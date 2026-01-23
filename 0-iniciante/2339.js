var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ')

const c = parseInt(values[0])
const p = parseInt(values[1])
const f = parseInt(values[2])

if (p >= c * f) {
    console.log('S')
} else {
    console.log('N')
}
