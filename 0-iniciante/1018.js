var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const value = parseInt(lines[0])
let n = value
const banknotes = [100, 50, 20, 10, 5, 2, 1]

console.log(value)

for (let i = 0; i < banknotes.length; i++) {
    const banknote = banknotes[i]
    const quantity = Math.floor(n / banknote)
    n = n % banknote

    console.log(quantity + " nota(s) de R$ " + banknote + ",00");
}
