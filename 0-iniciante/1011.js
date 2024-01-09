var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const r = lines.shift()
const volume = (4/3) * 3.14159 * (Math.pow(r, 3))

console.log(`VOLUME = ${volume.toFixed(3)}`)

