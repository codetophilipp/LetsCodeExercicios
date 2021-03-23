const matriz = [[1, 3, 6, 7], [9, 3, 7, 10]];
let novaMatriz = [];

for (indice in matriz) {
    for (numero of matriz[indice]) {
        novaMatriz.push(numero);
    }
}

console.log(novaMatriz);