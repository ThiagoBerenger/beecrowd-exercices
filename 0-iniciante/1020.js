var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const totalDays = parseInt(lines[0])

const convert = () => {
    let years = Math.floor(totalDays / 365)
    let mounth = Math.floor((totalDays % 365) / 30)
    let days = Math.floor((totalDays % 365) % 30)

    return console.log(`${years} ano(s)\n${mounth} mes(es)\n${days} dia(s)`)
}

convert(totalDays)

