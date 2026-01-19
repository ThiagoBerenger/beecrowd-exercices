var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

const value = lines[0].split(' ')

let A = value[0]
let B = value[1]
let C = value[2]
let D = value[3]

if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 == 0) {
    console.log('Valores aceitos')
} else {
    console.log('Valores nao aceitos')
}