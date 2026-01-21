var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const N = lines[0].split(' ')

const tabs = parseInt(N)

const actions = lines.slice(1)
    .map(word => {
        const convert = word.replace('\r', '')
        return convert === 'fechou' ? 1 :
               convert === 'clicou' ? -1 :
               convert
    })
    
const soma = actions.reduce((soma, value) => 
    Number(soma) + Number(value) )

console.log(soma + tabs)

