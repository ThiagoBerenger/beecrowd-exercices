var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const distancia = parseInt(lines.shift())

let tempoNecessario = distancia * 2

console.log(`${tempoNecessario} minutos`)




