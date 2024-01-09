var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const [num1, num2, num3] = lines.shift().split(' ')

const a = parseInt(num1)
const b = parseInt(num2)
const c = parseInt(num3)

const maiorAB = (a + b + Math.abs(a-b)) / 2

if(maiorAB < c) {
    console.log(`${c} eh o maior`)
} else {
    console.log(`${maiorAB} eh o maior`)
}