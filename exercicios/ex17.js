n1 = parseFloat(prompt("Digite o primeiro número"));
n2 = parseFloat(prompt("Digite o segundo número"));
n3 = parseFloat(prompt("Digite o terceiro número"));

const array = [10, 15, 50];
const novoArray = array.concat(n1, n2, n3);
alert(novoArray);