var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

const value = lines[0].split(' ')

let A = parseFloat(value[0])
let B = parseFloat(value[1])
let C = parseFloat(value[2])

const delta = B * B - 4 * A * C

const bhaskara = () => {
    if (A == 0 || delta < 0) {
        console.log('Impossivel calcular')
    } else {
        const x1 = ((-B + Math.sqrt(delta)) / (2 * A))
        const x2 = ((-B - Math.sqrt(delta)) / (2 * A))

        console.log(`R1 = ${x1.toFixed(5)}`)
        console.log(`R2 = ${x2.toFixed(5)}`)
    }
}

bhaskara()