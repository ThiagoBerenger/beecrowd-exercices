var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const value = parseInt(lines[0])

const convert = () => {
   let totalSeconds = value
   let s = totalSeconds % 60
   
   let totalMinutes = Math.floor(totalSeconds / 60)
   let m = totalMinutes % 60

   let h = Math.floor(totalMinutes / 60)

   return `${h}:${m}:${s}`;
}

console.log(convert(value))



