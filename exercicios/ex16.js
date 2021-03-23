n1 = parseFloat(prompt("Digite o primeiro número"));
n2 = parseFloat(prompt("Digite o segundo número"));

const array = [10, 15, 30];
array.unshift(n1);
array.push(n2);
alert(array);