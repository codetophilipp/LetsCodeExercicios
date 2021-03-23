let n1 = parseInt(prompt("Digite 5 números"));
let n2 = parseInt(prompt("Digite 5 números"));
let n3 = parseInt(prompt("Digite 5 números"));
let n4 = parseInt(prompt("Digite 5 números"));
let n5 = parseInt(prompt("Digite 5 números"));

let arrayNumeros = [];
arrayNumeros.push(n1);
arrayNumeros.push(n2);
arrayNumeros.push(n3);
arrayNumeros.push(n4);
arrayNumeros.push(n5);
console.log(arrayNumeros);

function ordemCrescente() {
    arrayNumeros.sort(function (a,b) {return (a - b)});
    alert("Ordem Crescente: " + arrayNumeros);
}

function ordemDecrescente() {
    arrayNumeros.sort(function(a,b) {return (b - a)});
    alert("Ordem Decrescente: " + arrayNumeros);
}

(ordemCrescente());
(ordemDecrescente());