let op = prompt("Digite sua opção: a) Adicionar um produto / b) Sair");
let listaProdutos = [];


while(op == 'a') {
    let produto = prompt("Digite o nome do produto que deseja adicionar");
    listaProdutos.push(produto);
    op = prompt("Digite sua opção: a) Adicionar um produto / b) Sair");
} 

console.log(listaProdutos);