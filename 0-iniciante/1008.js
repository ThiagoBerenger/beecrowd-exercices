var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const num = parseInt(lines.shift())
const horas = parseInt(lines.shift())
const valorHora = parseFloat(lines.shift())

const salario = horas * valorHora

console.log(`NUMBER = ${num}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)


