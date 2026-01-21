var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines.map(i => i.replace('\r','').trim()).filter(i => i !== '')

const grams = [300, 1500, 600, 1000, 150]

const calculo = values.reduce((total, value, index) =>
     total + (grams[index] * Number(value)), 0 
)
console.log(calculo + 225)
