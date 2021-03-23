//let n1 = parseFloat(prompt("Digite o primeiro número"));
//let n2 = parseFloat(prompt("Digite o segundo número"));

let n3 = 3;
let n4 = 8;
let contador = 1;
let par = 0;

let maior = Math.max(n3, n4);

while(contador < maior) {
    if (maior%2 == 0) {
        par++;
    }
    maior--;
}

console.log(par);