var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const distancia = lines.shift()
const combustivel = lines.shift()

const combustivelGasto = distancia / combustivel

console.log(`${combustivelGasto.toFixed(3)} km/l`)


