let n1 = parseFloat(prompt("digite o primeiro número"));
let n2 = parseFloat(prompt("digite o segundo número"));
let n3 = parseFloat(prompt("digite o terceiro número"));
let controle;

if (n2 > n1) {
    controle = n2;
    n2 = n1;
    n1 = controle;
} 

if (n3 > n1) {
    controle = n3;
    n3 = n1;
    n3 = controle;
}

if (n3 > n2) {
    controle = n3;
    n3 = n2;
    n2 = controle;
}

alert(`Números em ordem descrescente: ${n1}, ${n2}, ${n3} `);