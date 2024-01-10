var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const [num1, num2] = lines.shift().split(' ') 
const [num3, num4] = lines.shift().split(' ') 

// convertendo em number
const x1 = parseFloat(num1)
const y1 = parseFloat(num2)
const x2 = parseFloat(num3)
const y2 = parseFloat(num4)

// calculo

let x = Math.pow((x2 - x1), 2)
let y = Math.pow((y2 - y1), 2)

let distancia = Math.sqrt(x + y)

console.log(distancia.toFixed(4))






