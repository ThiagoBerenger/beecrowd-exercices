const { type } = require('os');
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const [num1, num2, num3] = lines.shift().split(' ')

// conversão

const a = parseFloat(num1)
const b = parseFloat(num2)
const c = parseFloat(num3)

// formulas ---

const areaTrianguloRetangulo = (a * c) / 2
const areaCirculo = 3.14159 * (Math.pow(c, 2))
const areaTrapezio = ((a + b) / 2) * c
const areaQuadrado = b * b
const areaRetangulo = a * b

// impressão

console.log(`TRIANGULO: ${areaTrianguloRetangulo.toFixed(3)}`)
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`)
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`)