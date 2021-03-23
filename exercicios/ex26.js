let listaCompras = [
    {
        nome: 'Arroz',
        quantidade: 1
    },
    {
        nome: 'Feijão',
        quantidade: 1
    },
    {
        nome: 'Açúcar',
        quantidade: 1
    },
    {
        nome: 'Milho',
        quantidade: 1
    },
    {
        nome: 'Arroz',
        quantidade: 1
    },
    {
        nome: 'Milho',
        quantidade: 1
    },
    {
        nome: 'Feijão',
        quantidade: 1
    },
    {
        nome: 'Açúcar',
        quantidade: 1
    },
];

let itemParaProcurar = prompt("Digite o nome do item que deseja procurar");
let item = listaCompras.find(item => item.nome === itemParaProcurar);
let novaLista = [];
let totalItens = 0;

for(item of listaCompras){
    if(item.nome == itemParaProcurar){
        novaLista.push(item);
        totalItens++;
    }
}

console.log(`Quantidade deste item na lista = ${totalItens}`);
console.log(novaLista);