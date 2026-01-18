var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

const value = parseFloat(lines[0])

function calculate() {
    let cents = Math.round(value * 100)

    const banknotes = [10000, 5000, 2000, 1000, 500, 200];
    const coins = [100, 50, 25, 10, 5, 1]

    console.log('NOTAS:')
    for (const banknote of banknotes) {
        const qtd = Math.floor(cents / banknote)
        cents %= banknote
        console.log(`${qtd} nota(s) de R$ ${(banknote / 100).toFixed(2)}`)
    }

    console.log('MOEDAS:')
    for (const coin of coins) {
        const qtd = Math.floor(cents / coin)
        cents %= coin
        console.log(`${qtd} moeda(s) de R$ ${(coin / 100).toFixed(2)}`)
    }
}

calculate();
