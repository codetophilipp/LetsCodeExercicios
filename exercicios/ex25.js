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

let itemParaRetirar = prompt("Digite o nome do item que deseja remover");

let indexItemRetirar = 0;

do{
    indexItemRetirar = listaCompras.findIndex(item=> item.nome === itemParaRetirar);
    if(indexItemRetirar>-1){
        listaCompras.splice(indexItemRetirar, 1);
        alert("item retirado: " + indexItemRetirar);
    }
} while (indexItemRetirar>-1);


console.log(listaCompras);