var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

// Horas, Velocidade
// Calcular distância percorrida

const interval = parseInt(lines[0])

const totalDistance = lines.slice(1, interval + 1)
        .map(line => line.trim().split(/\s+/).map(Number))
        .reduce((total, [t, v]) => total + t * v, 0)

console.log(totalDistance)





