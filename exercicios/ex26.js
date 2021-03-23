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

console.log(item);