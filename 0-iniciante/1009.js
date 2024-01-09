var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const nome = parseInt(lines.shift())
const salarioFixo = parseFloat(lines.shift())
const totalVendas = parseFloat(lines.shift())

const comissao = totalVendas * (15 / 100)
const total = comissao + salarioFixo

console.log(`TOTAL = R$ ${total.toFixed(2)}`)