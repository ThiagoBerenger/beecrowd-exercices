var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const note = parseInt(lines[0])

const notes = [ 
    { id:'E', value: 0}, 
    { id:'D', value: 35}, 
    { id:'C', value: 60}, 
    { id:'B', value: 85}, 
    { id:'A', value: 100}, 
]

const result = notes.find(line => line.value >= note)
console.log(result.id)
