const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const operacao = document.getElementById('operacao')

const somar = (n1, n2) => n1 + n2
const subtrair = (n1, n2) => n1 - n2
const multiplicar = (n1, n2) => n1 * n2
const dividir = (n1, n2) => n1 / n2

// const n1 = parseFloat(prompt('numero'))
// const n2 = parseFloat(prompt('numero'))

// const somaFuncao = (n1, n2) => calcular(somar, n1, n2)

const calcular = (operacao, n1, n2) => operacao(n1,n2)
const media = (n1, n2) => calcular(dividir, calcular(somar, n1, n2), 2)

console.log(calcular(somar, n1, n2))

// console.log(calcular(subtrair, n1, n2))
// console.log(calcular(multiplicar, n1, n2))
// console.log(calcular(dividir, n1, n2))

