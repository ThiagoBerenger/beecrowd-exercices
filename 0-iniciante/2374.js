var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const currentPressure = parseInt(lines[0])
const orderedPressure = parseInt(lines[1])

console.log(currentPressure - orderedPressure)
