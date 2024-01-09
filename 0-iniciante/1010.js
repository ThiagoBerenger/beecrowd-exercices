var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const linha1 = lines.shift().split(' ')
const linha2 = lines.shift().split(' ')

const numPecasLinha1 = linha1[1]
const numPecasLinha2 = linha2[1]

const valorPecaLinha1 = linha1[2]
const valorPecaLinha2 = linha2[2]

const total = (numPecasLinha1 * valorPecaLinha1) + (numPecasLinha2 * valorPecaLinha2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)