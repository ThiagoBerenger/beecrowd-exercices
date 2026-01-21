var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const horas = parseInt(lines.shift())
const velocidade = parseInt(lines.shift())

let calc = (velocidade * horas) / 12
let litros = calc.toFixed(3)

console.log(litros)
