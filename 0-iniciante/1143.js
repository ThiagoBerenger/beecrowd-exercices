var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const value = parseInt(lines[0])

let number = 0
for(let i = 0; i < value; i++) {
    number++
    const square = number * number
    const cube = (number * number) * number
    
    console.log(number, square, cube)
}
