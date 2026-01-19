var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const value = lines[0].split(' ')

const code = value[0]
const qtd = value[1]

const foods = [
    {id: 1, name: 'Cachorro Quente', price: 4},
    {id: 2, name: 'X-Salada', price: 4.50},
    {id: 3, name: 'X-Bacon', price: 5},
    {id: 4, name: 'Torrada Simples', price: 2},
    {id: 5, name: 'Refrigerante', price: 1.50},
]

const order = foods.find(value => value.id == code)
const result = order.price * qtd

console.log('Total: R$ ' + result.toFixed(2))



