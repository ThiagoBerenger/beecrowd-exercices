var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines.map(i => i.replace('\r','').trim()).filter(i => i !== '')

let count = 0, previous = null

for (let value of values.slice(1)) {
    if(value !== previous) {
        count++
    }
    previous = value
}

console.log(count)


// for (let i = 1; i <= numbers; i ++) {
//     const current = lines[i];
//     if (current !== lastSelected) {
//         selected ++;
//         lastSelected = current;
//     }
// }
